import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGroupsRoutingModule } from './data-groups-routing.module';
import { DataGroupsComponent } from './data-groups.component';
import {MatTableModule} from '@angular/material/table';
import { MaterialModule } from '../../../../material.module';


@NgModule({
  declarations: [DataGroupsComponent],
  imports: [
    CommonModule,
    DataGroupsRoutingModule,
    MatTableModule,
    MaterialModule
  ]
})
export class DataGroupsModule { }
