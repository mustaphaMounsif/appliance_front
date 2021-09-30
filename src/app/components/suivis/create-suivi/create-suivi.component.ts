import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pov } from 'src/app/models/pov';
import { Suivi } from 'src/app/models/suivi';
import { TypePrestation } from 'src/app/models/type-prestation';
import { PovService } from 'src/app/services/pov.service';
import { SuiviService } from 'src/app/services/suivi.service';
import { TypePrestationService } from 'src/app/services/type-prestation.service';

@Component({
  selector: 'app-create-suivi',
  templateUrl: './create-suivi.component.html',
  styleUrls: ['./create-suivi.component.css']
})
export class CreateSuiviComponent implements OnInit {

  suivi:Suivi =new Suivi();

  typePresentations:TypePrestation[];
  povs:Pov[]; 

  constructor(private suiviService:SuiviService,
              private typePrestationService:TypePrestationService,
              private povService:PovService,
              private router:Router,
              protected ref:MatDialogRef<CreateSuiviComponent>
              ) { }

  ngOnInit(): void {
    this.getTypePrestations();
    this.getPovs();
  }
  getPovs(){
    this.povService.getPovList().subscribe(data=>{
      this.povs=data;
    })
  }
  getTypePrestations(){
    this.typePrestationService.getTypePrestationList().subscribe(data=>{
      this.typePresentations=data;
      
    });
  }

  saveSuivi(){
    console.log(this.typePresentations);
    this.suiviService.createSuivi(this.suivi).subscribe(data=>{
      this.goToSuiviList();
      let currentUrl=this.router.url;
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.router.navigate([currentUrl]);
      });
    },
    error=>console.log(error)
    );
    this.ref.close();
  } 


  goToSuiviList(){
    this.router.navigate(['/suivis']);
  }

  onSubmit(){
    this.saveSuivi();
  }

}
