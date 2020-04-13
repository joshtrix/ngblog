import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendingMessagesComponent } from './sending-messages.component';

const routes: Routes = [{ path: '', component: SendingMessagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendingMessagesRoutingModule { }
