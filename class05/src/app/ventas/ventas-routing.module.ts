import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';


import { VentasComponent } from './ventas.component';


@NgModule({
    imports: [  
        RouterModule.forChild([
            {
                path: '',
                component: VentasComponent,
                children:[
                    { path: 'cliente', loadChildren:'./../ventas/cliente/cliente.module#ClienteModule'}
                ]
            }
        ])
    ],
    exports: [RouterModule],
    providers: [ ]
})

export class VentasRoutingModule{}

