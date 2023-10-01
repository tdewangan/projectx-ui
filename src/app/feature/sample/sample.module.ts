import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from '@shared/shared.module';
import { GridClientSideComponent } from './grid-client-side/grid-client-side.component';


@NgModule({
  declarations: [
    GridClientSideComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClarityModule,
    SampleRoutingModule,
    SharedModule,
  ]
})
export class SampleModule { }
