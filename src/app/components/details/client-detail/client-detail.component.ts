import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Contact } from 'src/app/models/contact';
import { ClientService } from 'src/app/services/client.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client:Client =new Client();
  id:number;
  contacts:Contact[];
  
 

  constructor(private clientService:ClientService,private route:ActivatedRoute,private contactService:ContactService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params[`id`];
    
    this.clientPov(this.id);
    this.listContactClient(this.id);
  
  }

  clientPov(id:number){
    console.log(id);
    this.clientService.getClientByPov(id).subscribe(data=>{
     // console.log(this.client);
    this.client=data;
    })
  } 
  listContactClient(id:number){
    this.contactService.getContactByClient(id).subscribe(data=>{
      this.contacts=data;
    })
  }
  


}
