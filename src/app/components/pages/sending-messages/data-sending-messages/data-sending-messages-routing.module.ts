import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataSendingMessagesComponent } from './data-sending-messages.component';

const routes: Routes = [{ path: '', component: DataSendingMessagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataSendingMessagesRoutingModule { }
