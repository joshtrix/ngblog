import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [GroupsComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MaterialModule
  ]
})
export class GroupsModule { }
