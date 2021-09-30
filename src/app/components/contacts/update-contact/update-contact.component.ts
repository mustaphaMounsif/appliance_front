import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Contact } from 'src/app/models/contact';
import { ClientService } from 'src/app/services/client.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  id:number;
  contact:Contact;

  clients:Client[];

  constructor(private contactService:ContactService,
              private router:Router,
              private clientService:ClientService,
              protected ref:MatDialogRef<UpdateContactComponent>,
              @Inject(MAT_DIALOG_DATA)data ) {
                this.contact=data;
               }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(){
    this.clientService.getClientList().subscribe(data=>{
      this.clients=data;
    })
  }

  onSubmit(){
    this.contactService.updateContact(this.id,this.contact).subscribe(data=>{
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
      this.router.navigate(['/contacts'])
    }

}
