import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredefinedMessagesRoutingModule } from './predefined-messages-routing.module';
import { PredefinedMessagesComponent } from './predefined-messages.component';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms/';

@NgModule({
  declarations: [PredefinedMessagesComponent],
  imports: [
    CommonModule,
    PredefinedMessagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PredefinedMessagesModule { }
