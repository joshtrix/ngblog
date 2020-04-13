import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdcButtonModule,
  MdcCardModule,
  MdcChipsModule,
  MDCDataTableModule,
  MdcDialogModule,
  MdcDrawerModule,
  MdcFabModule,
  MdcIconModule,
  MdcLinearProgressModule,
  MdcListModule,
  MdcMenuModule,
  MdcSelectModule,
  MdcSnackbarModule,
  MdcTextFieldModule,
  MdcTopAppBarModule,
  MdcTypographyModule,
  MdcIconRegistry
} from '@angular-mdc/web';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MdcButtonModule,
    MdcCardModule,
    MdcChipsModule,
    MDCDataTableModule,
    MdcDialogModule,
    MdcDrawerModule,
    MdcFabModule,
    MdcIconModule,
    MdcLinearProgressModule,
    MdcListModule,
    MdcMenuModule,
    MdcSelectModule,
    MdcSnackbarModule,
    MdcTextFieldModule,
    MdcTopAppBarModule,
    MdcTypographyModule
  ],
  exports: [
    MdcButtonModule,
    MdcCardModule,
    MdcChipsModule,
    MDCDataTableModule,
    MdcDialogModule,
    MdcDrawerModule,
    MdcFabModule,
    MdcIconModule,
    MdcLinearProgressModule,
    MdcListModule,
    MdcMenuModule,
    MdcSelectModule,
    MdcSnackbarModule,
    MdcTextFieldModule,
    MdcTopAppBarModule,
    MdcTypographyModule
  ]
})
export class MaterialMdcModule {
  constructor(iconRegistry: MdcIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
