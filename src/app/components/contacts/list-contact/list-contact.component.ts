import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { ContactService } from 'src/app/services/contact.service';
import { CreateContactComponent } from '../create-contact/create-contact.component';
import { UpdateContactComponent } from '../update-contact/update-contact.component';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  contacts:Contact[];

  constructor(private contactService:ContactService,
              private dialog:MatDialog,
              private confirmation:ConfirmationService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  private getContacts(){
    this.contactService.getContactList().subscribe(data=>{
      this.contacts=data;
    })
  }

  onCreate(){
    this.dialog.open(CreateContactComponent);
  }

  updateContact(contact:Contact){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      id_contact:contact.id_contact,
      nom:contact.nom,
      prenom:contact.prenom,
      telephone:contact.telephone,
      fonction:contact.fonction,
      email:contact.email,
      id_client:contact.id_client,
      libelleClient:contact.libelleClient,
    }
    this.dialog.open(UpdateContactComponent,dialogConfig);
  }

 /* deleteContact(id:number){

    this.contactService.deleteContact(id).subscribe(data=>{
      console.log(data);
      this.getContacts();
    })

  }
*/

deleteContact(id:number){
  this.confirmation.openConfirmDialog('Êtes-vous sûr de supprimer cet Enregistrement ?').afterClosed().subscribe(res=>{
    if(res){
      this.contactService.deleteContact(id).subscribe(data=>{
        console.log(data);
        this.getContacts();
      })
    }
  })

}

}
