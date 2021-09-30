import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeApp } from 'src/app/models/type-app';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {

  id:number;

  type:TypeApp;

  constructor(
    private typeService:TypeService,
    private router:Router,
    private route:ActivatedRoute,
    private ref:MatDialogRef<UpdateTypeComponent>,

    @Inject(MAT_DIALOG_DATA) data) { 
        this.type=data;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.typeService.updateType(this.id,this.type).subscribe(data=>{
      this.goToTypeList();
      let currentUrl =this.router.url;
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.router.navigate([currentUrl]);
      });
    },
    error=>console.log(error)
    ); 
    this.ref.close();
  }

    goToTypeList(){
      this.router.navigate(['/types']);
    }

}
