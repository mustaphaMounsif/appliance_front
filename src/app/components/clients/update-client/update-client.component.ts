import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id:number;

  client:Client;


  constructor (private clientService:ClientService,
               private router:Router,
               private ref:MatDialogRef<UpdateClientComponent>,
              @Inject(MAT_DIALOG_DATA)
              data) {
                this.client=data;
               }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clientService.updateClient(this.id,this.client).subscribe(data=>{
      this.goToClientList();

      let currentUrl=this.router.url;
      this.router.navigateByUrl('/clients',{skipLocationChange:true});

    },
    error=>console.log(error)
    );
    this.ref.close();
}


  goToClientList(){
    this.router.navigate(['/clients']);
  }
}
