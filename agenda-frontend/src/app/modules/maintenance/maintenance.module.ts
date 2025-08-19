import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaintenanceRoutingModule } from './maintenance-routing.module';

import { AreaPageComponent } from './pages/area-page/area-page.component';
import { ProfessionalPageComponent } from './pages/professional-page/professional-page.component';
import { AppointmentTypePageComponent } from './pages/appointment-type-page/appointment-type-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ClientsTablePageComponent } from './pages/clients-table-page/clients-table-page.component';
import { ClientFormPageComponent } from './pages/client-form-page/client-form-page.component';
import { ModalComponent } from '../../shared/modal/modal.component';

@NgModule({
  declarations: [
    AreaPageComponent,
    ProfessionalPageComponent,
    AppointmentTypePageComponent,
    UserPageComponent,
    ClientsTablePageComponent,
    ClientFormPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaintenanceRoutingModule,
    ReactiveFormsModule,
    ModalComponent
  ]
})
export class MaintenanceModule { }