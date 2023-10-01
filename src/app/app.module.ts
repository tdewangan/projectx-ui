import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './shell/shell.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SampleAdressFormComponent } from './sample/sample-adress-form/sample-adress-form.component';
import { SampleTableComponent } from './sample/sample-table/sample-table.component';
import { SpinnerComponent } from '@shared/components/loader/spinner.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SampleDynamicFormComponent } from './sample/sample-dynamic-form/sample-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SampleAdressFormComponent,
    SampleTableComponent,
    SpinnerComponent,
    SampleDynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
