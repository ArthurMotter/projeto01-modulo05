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
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ProfessionalFormComponent } from './components/professional-form/professional-form.component';
import { ProfessionalListComponent } from './components/professional-list/professional-list.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AppointmentTypePageComponent,
    AreaPageComponent,
    ClientFormPageComponent,
    ClientsTablePageComponent,
    ProfessionalFormComponent,
    ProfessionalListComponent,
    ProfessionalPageComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaintenanceRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe
  ]
})
export class MaintenanceModule { }