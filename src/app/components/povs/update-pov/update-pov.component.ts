import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Appliance } from 'src/app/models/appliance';
import { Client } from 'src/app/models/client';
import { Pov } from 'src/app/models/pov';
import { ApplianceService } from 'src/app/services/appliance.service';
import { ClientService } from 'src/app/services/client.service';
import { PovService } from 'src/app/services/pov.service';

@Component({
  selector: 'app-update-pov',
  templateUrl: './update-pov.component.html',
  styleUrls: ['./update-pov.component.css']
})
export class UpdatePovComponent implements OnInit {

  id:number;
  pov:Pov;

  appliances:Appliance[];

  clients:Client[];

  constructor(

              private povService:PovService,
              private router:Router,
              private applianceService:ApplianceService,
              private clientService:ClientService,
              private ref: MatDialogRef<UpdatePovComponent>,
              @Inject(MAT_DIALOG_DATA)data) {
                  this.pov=data;
               }

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



  onSubmit(){
    this.povService.updatePov(this.id,this.pov).subscribe(data=>{
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
      this.router.navigate(['/povs'])
    }

}
