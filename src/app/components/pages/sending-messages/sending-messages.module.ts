import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendingMessagesRoutingModule } from './sending-messages-routing.module';
import { SendingMessagesComponent } from './sending-messages.component';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms/';


@NgModule({
  declarations: [SendingMessagesComponent],
  imports: [
    CommonModule,
    SendingMessagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SendingMessagesModule { }
