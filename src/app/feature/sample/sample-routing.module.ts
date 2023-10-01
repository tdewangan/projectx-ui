import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GridClientSideComponent } from './grid-client-side/grid-client-side.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'clientgrid', component: GridClientSideComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
