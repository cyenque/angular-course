import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { ICliente } from './cliente';
@Component({
    templateUrl: './cliente-listado.component.html',
    styleUrls: ['./cliente-listado.component.css']
})
export class ClienteListadoComponent implements OnInit{
    
    pageTitle:string;
    errorMessage:string;

    clientes: ICliente[];

    constructor(private clienteService: ClienteService){
        this.pageTitle='Listado de Clientes';
    }

    ngOnInit(): void {
        this.clienteService.getClientes().subscribe(
            info=>{
                console.log(info);
                this.clientes=info
            },
            error=>this.errorMessage=error
        )
    }    
}