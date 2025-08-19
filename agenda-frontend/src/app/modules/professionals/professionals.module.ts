import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { ModalComponent } from '../../shared/modal/modal.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ProfessionalFormComponent } from './components/professional-form/professional-form.component';
import { ProfessionalListComponent } from './components/professional-list/professional-list.component';

@NgModule({
  declarations: [
    ProfessionalFormComponent,
    ProfessionalListComponent
  ],
  imports: [
    CommonModule,
    ProfessionalsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalComponent,
    NgxMaskDirective,
    NgxMaskPipe       
  ]
})
export class ProfessionalsModule { }