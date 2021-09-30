import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Appliance } from 'src/app/models/appliance';
import { Client } from 'src/app/models/client';
import { Pov } from 'src/app/models/pov';
import { ApplianceService } from 'src/app/services/appliance.service';
import { ClientService } from 'src/app/services/client.service';
import { PovService } from 'src/app/services/pov.service';

@Component({
  selector: 'app-create-pov',
  templateUrl: './create-pov.component.html',
  styleUrls: ['./create-pov.component.css']
})
export class CreatePovComponent implements OnInit {

  pov:Pov =new Pov();

  appliances:Appliance[];

  clients:Client[]; 
  maxDate:any;
  minDate:any;

  constructor(private povService:PovService,
              private applianceService:ApplianceService,
              private clientService:ClientService,
              private router:Router,
              protected ref:MatDialogRef<CreatePovComponent>
              
              ) { }

  ngOnInit(): void {
    this.getAppliances();
    this.getClients();
  }

  private getAppliances(){
    this.applianceService.getApplianceList().subscribe(data=>{
      this.appliances=data;
    })
  }

  private getClients(){
    this.clientService.getClientList().subscribe(data=>{
      this.clients=data;
    })
  }

  savePov(){
    this.povService.createPov(this.pov).subscribe(
      data=>{
        this.goToPovList();
        let currentUrl=this.router.url;
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
          this.router.navigate([currentUrl]);
        });
      },
      error=>console.log(error)
    );
    this.ref.close();
  }

  goToPovList(){
    this.router.navigate(['/povs']);
  }

  onSubmit(){
    this.savePov();
    console.log(this.savePov());
  }

test(date:any){
this.minDate=date.target.value;

this.maxDate=new Date(this.minDate)
this.maxDate=new Date(this.maxDate.setMonth(this.maxDate.getMonth()+1))

this.maxDate=formatDate(this.maxDate,'yyyy-MM-dd','en-US');
}

}
