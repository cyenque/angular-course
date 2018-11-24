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
                ]
            }
        ])
    ],
    exports: [RouterModule],
    providers: [ ]
})

export class VentasRoutingModule{}

