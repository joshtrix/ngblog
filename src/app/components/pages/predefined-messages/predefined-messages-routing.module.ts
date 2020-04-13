import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredefinedMessagesComponent } from './predefined-messages.component';

const routes: Routes = [{ path: '', component: PredefinedMessagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredefinedMessagesRoutingModule { }
