import { HttpClientModule } from '@angular/common/http';
import { VentasComponent } from './ventas.component';
import { VentasRoutingModule } from './ventas-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        SharedModule,
        HttpClientModule,
        VentasRoutingModule
    ],
    declarations: [ VentasComponent],
    providers: []
})
export class VentasModule {}