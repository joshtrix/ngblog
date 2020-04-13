import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataGroupsComponent } from './data-groups.component';

const routes: Routes = [{ path: '', component: DataGroupsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataGroupsRoutingModule { }
