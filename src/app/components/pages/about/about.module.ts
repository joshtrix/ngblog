import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms/';


@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, MaterialModule, ReactiveFormsModule]
})
export class AboutModule {}
