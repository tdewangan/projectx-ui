import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleModule } from './feature/sample/sample.module';
import { LoaderInterceptor } from './layout/loading/loader-interceptor';
import { LoadingComponent } from './layout/loading/loading.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ShellComponent } from './layout/shell/shell.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    NavbarComponent,
    SidenavComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SampleModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
