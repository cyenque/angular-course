import { ClienteFilterPipe } from './cliente-filter.pipe';
import { ClienteService } from './cliente.service';
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { ClienteListadoComponent } from "./cliente-listado.component";
import { ClienteDetalleComponent } from './cliente-detalle.component';
import { ClienteResolver } from './cliente-resolver.service';
import { ClienteEditComponent } from './cliente-edit.component';
import { TipoDocumentoService } from '../tipoDocumento/tipoDocumento.service';

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
            {
                path: ':id/edit',
                component: ClienteEditComponent,
                resolve: { cliente: ClienteResolver }
            }
        ])
    ],
    declarations:[
        ClienteListadoComponent,
        ClienteDetalleComponent,
        ClienteEditComponent,
        ClienteFilterPipe
    ],
    providers: [
        ClienteService,
        ClienteResolver,
        TipoDocumentoService
    ]
})
export class ClienteModule {}