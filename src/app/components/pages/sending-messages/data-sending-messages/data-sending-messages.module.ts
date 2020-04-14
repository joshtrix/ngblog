import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSendingMessagesRoutingModule } from './data-sending-messages-routing.module';
import { DataSendingMessagesComponent } from './data-sending-messages.component';
import { MaterialModule } from '../../../../material.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DataSendingMessagesComponent],
  imports: [
    CommonModule,
    DataSendingMessagesRoutingModule,
    MaterialModule,
    AngularMultiSelectModule,
    FormsModule
  ]
})
export class DataSendingMessagesModule { }
