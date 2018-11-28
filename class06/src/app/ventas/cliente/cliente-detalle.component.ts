import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICliente } from "./cliente";

@Component({
    templateUrl: './cliente-detalle.component.html'
})
export class ClienteDetalleComponent implements OnInit{
    pageTitle:string;
    errorMessage:string;
    cliente:ICliente

    constructor(private route:ActivatedRoute){
        this.pageTitle = 'Cliente Detalle';        
    }

    ngOnInit(): void {
        this.cliente = this.route.snapshot.data['cliente'];
    }

}