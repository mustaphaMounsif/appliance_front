import { Component, OnInit } from '@angular/core';
import { Appliance } from 'src/app/models/appliance';
import { ApplianceService } from 'src/app/services/appliance.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CreateApplianceComponent } from '../create-appliance/create-appliance.component';
import { Router } from '@angular/router';
import { UpdateApplianceComponent } from '../update-appliance/update-appliance.component';
import { TypeApp } from 'src/app/models/type-app';
import { PovService } from 'src/app/services/pov.service';
import { Pov } from 'src/app/models/pov';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';
import { ClientDetailComponent } from '../../details/client-detail/client-detail.component';
import { ConfirmationService } from 'src/app/services/confirmation.service';
@Component({
  selector: 'app-list-appliance',
  templateUrl: './list-appliance.component.html',
  styleUrls: ['./list-appliance.component.css']
})
export class ListApplianceComponent implements OnInit {

  appliances:Appliance[];
  povs:Pov[];
  showDetails:boolean = false;
  client:Client;
  page:number=1;
  totalRecords:string; 

  constructor(private applianceService:ApplianceService,
    private clientService:ClientService,
    private povService:PovService,
    private dialog:MatDialog,
    private router:Router,
    private confirmation:ConfirmationService,
                          ) { }

  ngOnInit(): void {
    this.getAppliances();
  }

 private  getAppliances(){

        this.applianceService.getApplianceList().subscribe(data=>{
          this.appliances=data;
          console.log(data)
        });
  }
onCreate(){
  this.dialog.open(CreateApplianceComponent );
  
}

detail(id:number){
  this.povService.getPovByApplianceDetail(id).subscribe(data=>{
    this.povs=data;
    this.showDetails = true;
  })

}

clientDetail(id:number){
  console.log(id)
this.router.navigate(['clients',id]);
}

povDetail(id:number){
  console.log(id)
this.router.navigate(['povs',id]);
}

updateAppliance(appliance: Appliance){
  const dialogConfig = new MatDialogConfig();
  
  dialogConfig.data = {
    id_appliance: appliance.id_appliance,
    libelleApplliance: appliance.libelleApplliance,
    dbid: appliance.dbid,
    disponibilitte: appliance.disponibilitte,
    reference: appliance.reference,
    id_type:appliance.id_type,
    libelleType:appliance.libelleType,
  };
  this.dialog.open(UpdateApplianceComponent,dialogConfig);
  //this.router.navigate(['update-appliance',id]);
}

/* deleteAppliance(id:number){
  this.applianceService.deleteAppliance(id).subscribe(data=>{
    console.log(data);
    this.getAppliances();
  });
}
*/
deleteAppliance(id:number){
  this.confirmation.openConfirmDialog('Êtes-vous sûr de supprimer cet Enregistrement ?').afterClosed().subscribe(res=>{
    if(res){
      this.applianceService.deleteAppliance(id).subscribe(data=>{
        console.log(data);
        this.getAppliances();
      });
    }
  });

}

// oreder by
key:string='libelleApplliance';
reverse:boolean=false;
sort(key){
  this.key=key;
  this.reverse = !this.reverse;
}

// recherche
libelleApplliance:any;
Search(){
  if(this.libelleApplliance == ""){
    this.ngOnInit();
  }else{
    this.appliances=this.appliances.filter(res=>{
      return res.libelleApplliance.toLocaleLowerCase().match(this.libelleApplliance.toLocaleLowerCase())
    })
  }
}
 

}
