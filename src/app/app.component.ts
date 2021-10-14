import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from './services/keycloak-security.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 nomPrenom:string;
  
 constructor(private securityService:KeycloakSecurityService){

  }
  title = 'gestion-pov';
  ngOnInit(): void {
    
    this.nomPrenom=KeycloakSecurityService.getFullName();
  }

  onLogout(){
    KeycloakSecurityService.logout();
  }

}
