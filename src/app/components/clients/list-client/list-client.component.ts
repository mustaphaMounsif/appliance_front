import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { CreateClientComponent } from '../create-client/create-client.component';
import { UpdateClientComponent } from '../update-client/update-client.component';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients:Client[];

  constructor(private clientService:ClientService,private dialog:MatDialog,private confirmation:ConfirmationService) { }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(){
    this.clientService.getClientList().subscribe(data=>{
      this.clients=data;
    })
  }

  onCreate(){
    this.dialog.open(CreateClientComponent);
  }

  updateClient(client:Client){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      id_client:client.id_client,
      libelleClient:client.libelleClient,
      secteur:client.secteur,
      activite:client.activite,
    };
    this.dialog.open(UpdateClientComponent,dialogConfig);
  }

 /* deleteClient(id:number){
    this.clientService.deleteClient(id).subscribe(data=>{
      console.log(data);
      this.getClients();
    });
  }
*/
deleteClient(id:number){
  this.confirmation.openConfirmDialog('Êtes-vous sûr de supprimer cet Enregistrement ?').afterClosed().subscribe(res=>{
    if(res){
      this.clientService.deleteClient(id).subscribe(data=>{
        console.log(data);
        this.getClients();
      });
    }
  });
  }


}
