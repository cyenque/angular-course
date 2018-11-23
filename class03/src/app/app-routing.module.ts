import { WelcomeComponent } from './security/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [      
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        ], { enableTracing: false}
        
        )
    ],
    exports: [RouterModule],
    providers: [ ]
})
export class AppRoutingModule { }