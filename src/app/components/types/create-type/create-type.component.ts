import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TypeApp } from 'src/app/models/type-app';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.css']
})
export class CreateTypeComponent implements OnInit {

    type:TypeApp=new TypeApp();

  constructor(private typeService:TypeService, 
    private router:Router,
    protected ref:MatDialogRef<CreateTypeComponent>) { }

  ngOnInit(): void {
    
  }

  saveType(){
    this.typeService.createType(this.type).subscribe(data=>{
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
  
  onSubmit(){
    this.saveType();
  }

}
