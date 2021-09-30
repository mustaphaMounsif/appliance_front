import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TypePrestation } from 'src/app/models/type-prestation';
import { TypePrestationService } from 'src/app/services/type-prestation.service';

@Component({
  selector: 'app-create-type-prestation',
  templateUrl: './create-type-prestation.component.html',
  styleUrls: ['./create-type-prestation.component.css']
})
export class CreateTypePrestationComponent implements OnInit {

  typePrestation:TypePrestation=new TypePrestation();

  constructor(private typePrestationService:TypePrestationService,
              private router:Router,
              protected ref:MatDialogRef<CreateTypePrestationComponent>
    ) { }

  ngOnInit(): void {
  }

  savetypePrestation(){
    this.typePrestationService.createTypePrestation(this.typePrestation).subscribe(data=>{
      this.goToTypePrestation();
      let currentUrl=this.router.url;
      this.router.navigateByUrl('/typePrestations',{skipLocationChange:true});
    },
    error=>console.log(error)
    );
    this.ref.close();
  }

  goToTypePrestation(){
    this.router.navigate(['/typePrestations']);
  }
  onSubmit(){
    this.savetypePrestation();
  }
}
