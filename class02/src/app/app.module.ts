import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { TestAngularComponent } from './test-angular/test-angular.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestAngularComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
