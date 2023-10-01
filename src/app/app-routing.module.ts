import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleAdressFormComponent } from './sample/sample-adress-form/sample-adress-form.component';
import { SampleTableComponent } from './sample/sample-table/sample-table.component';

const routes: Routes = [
  { path: 'address', component: SampleAdressFormComponent },
  { path: 'table', component: SampleTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
