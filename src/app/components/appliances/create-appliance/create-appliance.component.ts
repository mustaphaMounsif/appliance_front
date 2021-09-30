import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Appliance } from 'src/app/models/appliance';
import { TypeApp } from 'src/app/models/type-app';
import { ApplianceService } from 'src/app/services/appliance.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-create-appliance',
  templateUrl: './create-appliance.component.html',
  styleUrls: ['./create-appliance.component.css']
})
export class CreateApplianceComponent implements OnInit {

  appliance: Appliance = new Appliance();

  types:TypeApp[]; 
  
  constructor(private applianceService:ApplianceService, 
    private typeServer:TypeService,
    private router:Router,
    protected ref: MatDialogRef<CreateApplianceComponent>) { }

  ngOnInit(): void {
    this.getTypes();
  }

  private getTypes(){
    this.typeServer.getTypeList().subscribe(data=>{
      this.types=data;
    });
  }

  saveAppliance(){
    this.applianceService.createAppliace(this.appliance).subscribe(data=>{
      this.goToApplianceList();
      
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });

    },
    error=>console.log(error)
    );
    this.ref.close();    
  }


  goToApplianceList(){
    this.router.navigate(['/appliances']);
  }

  onSubmit(){
    this.saveAppliance();
    console.log(this.appliance);
   
  }

 
  
}
