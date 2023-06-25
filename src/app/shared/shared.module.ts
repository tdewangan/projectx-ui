import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, userIcon, cogIcon, objectsIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, cogIcon, objectsIcon);
const modules: any[] = [
  ClarityModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
