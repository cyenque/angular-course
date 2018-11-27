import { Component } from '@angular/core';
import { ICliente } from './cliente';
@Component({
    templateUrl: './cliente-listado.component.html',
    styleUrls: ['./cliente-listado.component.css']
})
export class ClienteListadoComponent {
    pageTitle:string;
    errorMessage:string;

    clientes: ICliente[];

    constructor(){
        this.pageTitle='Listado de Clientes';
    }
}