import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client:Client=new Client();

  constructor(
    private clientService:ClientService,
    private router:Router,
    private ref:MatDialogRef<CreateClientComponent>
  ) { }

  ngOnInit(): void {
  }

  saveClient(){
    this.clientService.createClient(this.client).subscribe(
      data=>{
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
  onSubmit(){
    this.saveClient();
  }

}
