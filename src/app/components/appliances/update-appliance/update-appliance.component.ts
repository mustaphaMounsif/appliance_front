import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Appliance } from 'src/app/models/appliance';
import { TypeApp } from 'src/app/models/type-app';
import { ApplianceService } from 'src/app/services/appliance.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-update-appliance',
  templateUrl: './update-appliance.component.html',
  styleUrls: ['./update-appliance.component.css']
})
export class UpdateApplianceComponent implements OnInit {

  id:number;

  appliance: Appliance;

  types:TypeApp[];

  constructor(private applianceService:ApplianceService ,
    private typeServer:TypeService,
    private route:ActivatedRoute,
    private router:Router,
    private ref: MatDialogRef<UpdateApplianceComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.appliance = data;
  }

  private getTypes(){
    this.typeServer.getTypeList().subscribe(data=>{
      this.types=data;
    });
  }

  ngOnInit(): void {

    this.getTypes();

  }

  onSubmit(){
    this.applianceService.updateAppliance(this.id,this.appliance).subscribe(data=>{
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

}
