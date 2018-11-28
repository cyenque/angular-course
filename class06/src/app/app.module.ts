import { ClienteData } from './ventas/cliente/cliente-data';
import { LoginModule } from './security/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestAngularComponent } from './test-angular/test-angular.component'; 
import { WelcomeComponent } from './security/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { delay } from 'q';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    LoginModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TestAngularComponent,
    WelcomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
