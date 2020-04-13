import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatGridListModule
  ]
})
export class LoginModule {}
