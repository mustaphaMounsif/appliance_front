import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pov } from 'src/app/models/pov';
import { Suivi } from 'src/app/models/suivi';
import { TypePrestation } from 'src/app/models/type-prestation';
import { PovService } from 'src/app/services/pov.service';
import { SuiviService } from 'src/app/services/suivi.service';
import { TypePrestationService } from 'src/app/services/type-prestation.service';

@Component({
  selector: 'app-update-suivi',
  templateUrl: './update-suivi.component.html',
  styleUrls: ['./update-suivi.component.css']
})
export class UpdateSuiviComponent implements OnInit {

  id:number;
  suivi:Suivi;

  typePresentations:TypePrestation[];
  povs:Pov[];

  constructor(private suiviService:SuiviService,
              private typePrestationService:TypePrestationService,
              private povService:PovService,
              private router:Router,
              protected ref:MatDialogRef<UpdateSuiviComponent>,
              @Inject(MAT_DIALOG_DATA)data) {

                this.suivi=data;

               }

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

  onSubmit(){
    this.suiviService.updateSuivi(this.id,this.suivi).subscribe(data=>{
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
}
