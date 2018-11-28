import { HttpClientModule } from '@angular/common/http';
import { VentasComponent } from './ventas.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClienteData } from './cliente/cliente-data';

@NgModule({
    imports: [
        SharedModule,
        HttpClientModule,
        VentasRoutingModule,
        InMemoryWebApiModule.forRoot(ClienteData),
    ],
    declarations: [ VentasComponent],
    providers: []
})
export class VentasModule {}