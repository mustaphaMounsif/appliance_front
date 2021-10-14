import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Pov } from 'src/app/models/pov';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { PovService } from 'src/app/services/pov.service';
import { CreatePovComponent } from '../create-pov/create-pov.component';
import { UpdatePovComponent } from '../update-pov/update-pov.component';

@Component({
  selector: 'app-list-pov',
  templateUrl: './list-pov.component.html',
  styleUrls: ['./list-pov.component.css']
})
export class ListPovComponent implements OnInit {

  povs:Pov[]; 
  page:number=1;
  totalRecords:string; 

  constructor( private povService:PovService,private dialog:MatDialog,private confirmation:ConfirmationService) { }

  ngOnInit(): void {
    this.getPovs();
  }

  private getPovs(){
    this.povService.getPovList().subscribe(data=>{
      this.povs=data;
    });
  }

  onCreate(){
    this.dialog.open(CreatePovComponent);
  }

  updatePov(pov:Pov){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      id_pov:pov.id_pov,
      libellePov:pov.libellePov,
      analyseCyber:pov.analyseCyber,
      ingenieurCyber:pov.ingenieurCyber,
      description:pov.description,
      dateDebut:pov.dateDebut,
      dateFin:pov.dateFin,
      compteManager:pov.compteManager,
      id_appliance:pov.id_appliance,
      libelleApplliance:pov.libelleApplliance,
      id_client:pov.id_client,
      libelleClient:pov.libelleClient,
    };
    this.dialog.open(UpdatePovComponent,dialogConfig);
  }

 /* deletePov(id:number){
    this.povService.deletePov(id).subscribe(data=>{
      console.log(data);
      this.getPovs();
    });
  }
*/

deletePov(id:number){

  this.confirmation.openConfirmDialog('Êtes-vous sûr de supprimer cet Enregistrement ?').afterClosed().subscribe(res=>{
    if(res){
      this.povService.deletePov(id).subscribe(data=>{
        console.log(data);
        this.getPovs();
      });
    }
  })

}

// oreder by
key:string='libellePov';
reverse:boolean=false;
sort(key){
  this.key=key;
  this.reverse = !this.reverse;
}

// recherche
libellePov:any;
Search(){
  if(this.libellePov == ""){
    this.ngOnInit();
  }else{
    this.povs=this.povs.filter(res=>{
      return res.libellePov.toLocaleLowerCase().match(this.libellePov.toLocaleLowerCase())
    })
  }
}

}
