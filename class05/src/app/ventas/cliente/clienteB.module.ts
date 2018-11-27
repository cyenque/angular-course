import { ClienteService } from './cliente.service';
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { ClienteListadoComponent } from "./cliente-listado.component";

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            { path:'', component: ClienteListadoComponent }
        ])
    ],
    declarations:[
        ClienteListadoComponent
    ],
    // providers: [] luego son service
    providers: [ClienteService]
})
export class ClienteModule {}