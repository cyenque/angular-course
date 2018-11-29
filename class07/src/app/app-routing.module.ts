import { WelcomeComponent } from './security/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DirectivaComponent } from './directivas/directiva.component';

@NgModule({
    imports: [      
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            //{ path: 'directiva', component: DirectivaComponent },
            { path: 'ventas', loadChildren: './ventas/ventas.module#VentasModule'},
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        ], { enableTracing: false}
        
        )
    ],
    exports: [RouterModule],
    providers: [ ]
})
export class AppRoutingModule { }