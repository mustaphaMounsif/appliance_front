import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppliancePereComponent } from './components/appliances/appliance-pere/appliance-pere.component';
import { CreateApplianceComponent } from './components/appliances/create-appliance/create-appliance.component';
import { ListApplianceComponent } from './components/appliances/list-appliance/list-appliance.component';
import { UpdateApplianceComponent } from './components/appliances/update-appliance/update-appliance.component';
import { CreateClientComponent } from './components/clients/create-client/create-client.component';
import { ListClientComponent } from './components/clients/list-client/list-client.component';
import { UpdateClientComponent } from './components/clients/update-client/update-client.component';
import { CreateContactComponent } from './components/contacts/create-contact/create-contact.component';
import { ListContactComponent } from './components/contacts/list-contact/list-contact.component';
import { UpdateContactComponent } from './components/contacts/update-contact/update-contact.component';
import { ClientDetailComponent } from './components/details/client-detail/client-detail.component';
import { PovDetailComponent } from './components/details/pov-detail/pov-detail.component';
import { CreatePovComponent } from './components/povs/create-pov/create-pov.component';
import { ListPovComponent } from './components/povs/list-pov/list-pov.component';
import { UpdatePovComponent } from './components/povs/update-pov/update-pov.component';
import { CreateSceanceComponent } from './components/sceances/create-sceance/create-sceance.component';
import { ListSceanceComponent } from './components/sceances/list-sceance/list-sceance.component';
import { UpdateSceanceComponent } from './components/sceances/update-sceance/update-sceance.component';
import { CreateSuiviComponent } from './components/suivis/create-suivi/create-suivi.component';
import { ListSuiviComponent } from './components/suivis/list-suivi/list-suivi.component';
import { UpdateSuiviComponent } from './components/suivis/update-suivi/update-suivi.component';
import { CreateTypePrestationComponent } from './components/typePrestations/create-type-prestation/create-type-prestation.component';
import { ListTypePrestationsComponent } from './components/typePrestations/list-type-prestations/list-type-prestations.component';
import { UpdateTypePrestationComponent } from './components/typePrestations/update-type-prestation/update-type-prestation.component';
import { CreateTypeComponent } from './components/types/create-type/create-type.component';
import { ListTypeComponent } from './components/types/list-type/list-type.component';
import { UpdateTypeComponent } from './components/types/update-type/update-type.component';



const routes: Routes = [
  {path:'pov',component:AppliancePereComponent},
  {path:'appliances',component:ListApplianceComponent},
  {path:'create-appliance',component:CreateApplianceComponent},
  {path:'update-appliance/:id',component:UpdateApplianceComponent},

  {path:'types',component:ListTypeComponent},
  {path:'create-type',component:CreateTypeComponent},
  {path:'update-type/:id',component:UpdateTypeComponent},

  {path:'povs',component:ListPovComponent},
  {path:'create-pov',component:CreatePovComponent},
  {path:'update-pov/:id',component:UpdatePovComponent},
  {path:'povs/:id',component:PovDetailComponent},

  {path:'clients',component:ListClientComponent},
  {path:'create-client',component:CreateClientComponent},
  {path:'update-client',component:UpdateClientComponent},
  {path:'clients/:id',component:ClientDetailComponent},

  {path:'contacts',component:ListContactComponent},
  {path:'create-contact',component:CreateContactComponent},
  {path:'update-contact',component:UpdateContactComponent},

  {path:'sceances',component:ListSceanceComponent},
  {path:'create-sceance',component:CreateSceanceComponent},
  {path:'update-sceance',component:UpdateSceanceComponent},

  {path:'suivis',component:ListSuiviComponent},
  {path:'create-suivi',component:CreateSuiviComponent},
  {path:'update-suivi',component:UpdateSuiviComponent},

  {path:'typePrestations',component:ListTypePrestationsComponent},
  {path:'create-typePrestation',component:CreateTypePrestationComponent},
  {path:'update-typePrestation',component:UpdateTypePrestationComponent},

  {path:'',redirectTo:'pov',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
