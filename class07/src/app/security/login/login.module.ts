import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginReactComponent } from './login-react.component';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'login', component: LoginComponent }
            //{ path: 'login', component: LoginReactComponent }
        ])
    ],
    declarations: [
        LoginComponent,
        LoginReactComponent
        //LoginReactComponent
    ],
    providers: [ ]
})
export class LoginModule { }