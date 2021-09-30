import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TypePrestation } from 'src/app/models/type-prestation';
import { TypePrestationService } from 'src/app/services/type-prestation.service';

@Component({
  selector: 'app-update-type-prestation',
  templateUrl: './update-type-prestation.component.html',
  styleUrls: ['./update-type-prestation.component.css']
})
export class UpdateTypePrestationComponent implements OnInit {

  id:number;
  prestation:TypePrestation;

  constructor(private typePrestationService:TypePrestationService,
              private router:Router,
              protected ref:MatDialogRef<UpdateTypePrestationComponent>,
              @Inject(MAT_DIALOG_DATA)data) {
                this.prestation=data;
               }

  ngOnInit(): void {
  }

  onSubmit(){
    this.typePrestationService.updateTypePrestation(this.id,this.prestation).subscribe(data=>{
      this.goToTypePrestationList();
      let currentUrl=this.router.url;
      this.router.navigateByUrl('/typePrestations',{skipLocationChange:true});
    },
    error=>console.log(error)
    );
    this.ref.close();
  }


    goToTypePrestationList(){
      this.router.navigate(['/typePrestations']);
    }


  }
