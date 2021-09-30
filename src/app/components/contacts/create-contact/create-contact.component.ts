import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Contact } from 'src/app/models/contact';
import { ClientService } from 'src/app/services/client.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'] 
})
export class CreateContactComponent implements OnInit {

  contact:Contact=new Contact();
  clients:Client[];

  constructor(private contactService:ContactService,
              private clientService:ClientService, 
              private router:Router,
              protected ref:MatDialogRef<CreateContactComponent>
    ) { }

  ngOnInit(): void {
    
    this.getClients();
  }

  private getClients(){
    this.clientService.getClientList().subscribe(data=>{
      this.clients=data;
    })
  }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe(data=>{

        this.goToContactList();
        let currentUrl=this.router.url;
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
          this.router.navigate([currentUrl]);
        });
    
    },
    error=>console.log(error)
    
    );
    this.ref.close();
  } 

   goToContactList(){
     this.router.navigate(['/contacts']);
   }

   onSubmit(){
     this.saveContact();
   }


}
