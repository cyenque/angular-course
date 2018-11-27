import { ClienteService } from './cliente.service';
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { ClienteListadoComponent } from "./cliente-listado.component";
import { ClienteDetalleComponent } from './cliente-detalle.component';
import { ClienteResolver } from './cliente-resolver.service';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            { path:'', component: ClienteListadoComponent },
            {
                path: ':id',
                component: ClienteDetalleComponent,
                resolve: { cliente: ClienteResolver }
            },
        ])
    ],
    declarations:[
        ClienteListadoComponent,
        ClienteDetalleComponent
    ],
    // providers: [] luego son service
    providers: [
        ClienteService,
        ClienteResolver
    ]
})
export class ClienteModule {}