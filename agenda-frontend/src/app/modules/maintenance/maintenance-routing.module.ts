import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaPageComponent } from './pages/area-page/area-page.component';
import { ProfessionalPageComponent } from './pages/professional-page/professional-page.component';
import { AppointmentTypePageComponent } from './pages/appointment-type-page/appointment-type-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ClientsTablePageComponent } from './pages/clients-table-page/clients-table-page.component';
import { ClientFormPageComponent } from './pages/client-form-page/client-form-page.component';

const routes: Routes = [
  { path: 'areas', component: AreaPageComponent },
  { path: 'profissionais', component: ProfessionalPageComponent },
  { path: 'tipos-atendimento', component: AppointmentTypePageComponent },
  { path: 'clientes', component: ClientsTablePageComponent },
  { path: 'clientes/novo', component: ClientFormPageComponent },
  { path: 'clientes/editar/:id', component: ClientFormPageComponent },
  { path: 'usuarios', component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }