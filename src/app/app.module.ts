import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListApplianceComponent } from './components/appliances/list-appliance/list-appliance.component';
import { CreateApplianceComponent } from './components/appliances/create-appliance/create-appliance.component';
import {HttpClientModule  } from "@angular/common/http";
import { FormsModule  } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppliancePereComponent } from './components/appliances/appliance-pere/appliance-pere.component';
import { UpdateApplianceComponent } from './components/appliances/update-appliance/update-appliance.component';
import { ListTypeComponent } from './components/types/list-type/list-type.component';
import { CreateTypeComponent } from './components/types/create-type/create-type.component';
import { UpdateTypeComponent } from './components/types/update-type/update-type.component';
import { ListPovComponent } from './components/povs/list-pov/list-pov.component';
import { CreatePovComponent } from './components/povs/create-pov/create-pov.component';
import { UpdatePovComponent } from './components/povs/update-pov/update-pov.component';
import { ListClientComponent } from './components/clients/list-client/list-client.component';
import { CreateClientComponent } from './components/clients/create-client/create-client.component';
import { UpdateClientComponent } from './components/clients/update-client/update-client.component';
import { ListContactComponent } from './components/contacts/list-contact/list-contact.component';
import { CreateContactComponent } from './components/contacts/create-contact/create-contact.component';
import { UpdateContactComponent } from './components/contacts/update-contact/update-contact.component';
import { ListSceanceComponent } from './components/sceances/list-sceance/list-sceance.component';
import { CreateSceanceComponent } from './components/sceances/create-sceance/create-sceance.component';
import { UpdateSceanceComponent } from './components/sceances/update-sceance/update-sceance.component';
import { ListSuiviComponent } from './components/suivis/list-suivi/list-suivi.component';
import { CreateSuiviComponent } from './components/suivis/create-suivi/create-suivi.component';
import { UpdateSuiviComponent } from './components/suivis/update-suivi/update-suivi.component';
import { ListTypePrestationsComponent } from './components/typePrestations/list-type-prestations/list-type-prestations.component';
import { CreateTypePrestationComponent } from './components/typePrestations/create-type-prestation/create-type-prestation.component';
import { UpdateTypePrestationComponent } from './components/typePrestations/update-type-prestation/update-type-prestation.component';
import { ClientDetailComponent } from './components/details/client-detail/client-detail.component';
import { PovDetailComponent } from './components/details/pov-detail/pov-detail.component';
import { ConfirmationTypeComponent } from './components/types/confirmation-type/confirmation-type.component';
import { DashboardComponent } from './components/povs/dashboard/dashboard.component';
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export function kcFactory( kcSecurity:KeycloakSecurityService){
  return ()=> kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ListApplianceComponent,
    CreateApplianceComponent,
    AppliancePereComponent,
    UpdateApplianceComponent,
    ListTypeComponent,
    CreateTypeComponent,
    UpdateTypeComponent,
    ListPovComponent,
    CreatePovComponent,
    UpdatePovComponent,
    ListClientComponent,
    CreateClientComponent,
    UpdateClientComponent,
    ListContactComponent,
    CreateContactComponent,
    UpdateContactComponent,
    ListSceanceComponent,
    CreateSceanceComponent,
    UpdateSceanceComponent,
    ListSuiviComponent,
    CreateSuiviComponent,
    UpdateSuiviComponent,
    ListTypePrestationsComponent,
    CreateTypePrestationComponent,
    UpdateTypePrestationComponent,
    ClientDetailComponent,
    PovDetailComponent,
    ConfirmationTypeComponent,
    DashboardComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true}
  ],
  bootstrap: [AppComponent],
  entryComponents:[CreateApplianceComponent,UpdateApplianceComponent,ConfirmationTypeComponent],
  

})
export class AppModule { }
