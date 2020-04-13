import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataPredefinedMessagesComponent } from './data-predefined-messages.component';

const routes: Routes = [{ path: '', component: DataPredefinedMessagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataPredefinedMessagesRoutingModule { }
