import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';

import { DataPredefinedMessagesRoutingModule } from './data-predefined-messages-routing.module';
import { DataPredefinedMessagesComponent } from './data-predefined-messages.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [DataPredefinedMessagesComponent],
  imports: [
    CommonModule,
    DataPredefinedMessagesRoutingModule,
    MatTableModule,
    MaterialModule
  ]
})
export class DataPredefinedMessagesModule { }
