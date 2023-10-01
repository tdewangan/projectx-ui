import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityIcons, cogIcon, objectsIcon, userIcon } from '@cds/core/icon';
import { ClarityModule } from '@clr/angular';
import { AgGridModule } from 'ag-grid-angular';

ClarityIcons.addIcons(userIcon, cogIcon, objectsIcon);
const modules: any[] = [
  AgGridModule,
  ClarityModule,
  HttpClientModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class SharedModule {}
