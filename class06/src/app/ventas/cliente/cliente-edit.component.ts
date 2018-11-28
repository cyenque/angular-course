import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './cliente.service';
import { Component, OnInit } from "@angular/core";
import { TipoDocumentoService } from "../tipoDocumento/tipoDocumento.service";
import { ITipoDocumento } from "../tipoDocumento/tipoDocumento";
import { ICliente } from './cliente';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './cliente-edit.component.html',
    styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit{
    pageTitle:string;
    errorMessage:string;
    messageService:string;
    tipoDocumentos:ITipoDocumento[];
    cliente:ICliente;
    sexo:boolean; // para que funcione radio button modo ejemplo graba M o F
    
    constructor(private clienteService:ClienteService,
                private route:ActivatedRoute, 
                private router:Router,
                private tipoDocumentoService:TipoDocumentoService){
        this.pageTitle = 'Cliente ';
    }

    ngOnInit():void{
        this.route.data.subscribe(
            data=>{
                this.onClienteTitulo(data['cliente']);
            }
        );
        this.tipoDocumentoService.getTipoDocumentos().subscribe(
            info=>this.tipoDocumentos=info,
            error=>this.errorMessage=error
        );
    }

    onClienteTitulo(cliente:ICliente):void{
        if(isNullOrUndefined(cliente.sexo)) {cliente.sexo="F"; this.sexo=false;}
        this.cliente = cliente;
        if(this.cliente.id===0){
            this.pageTitle='Agregar Cliente';
        }
        else{
            this.pageTitle=`Editar Cliente: ${this.cliente.tipoDocumento} - ${this.cliente.numeroDocumento}`;
            if(this.cliente.sexo=="M") this.sexo=true;
            if(this.cliente.sexo=="F") this.sexo=false;
        }
    }

    onSaveCliente(clienteForm:NgForm):void{
        // validaciones
        if(clienteForm && clienteForm.valid){
            if(this.onValidar()){
                if(this.sexo) this.cliente.sexo="M"; else this.cliente.sexo="F";
                this.clienteService.saveCliente(this.cliente)
                .subscribe(
                    info=>this.onMessage(`El cliente ${this.cliente.nombres} ${this.cliente.apellidoPaterno} se grabó satisfactoriamente.`,false)
                )
            }else{
                this.onMessage("Los campos no son validos, por favor complete la información",true);
            }
        }
    }

    onValidar():boolean{
        let valido:boolean=false;
        if((this.cliente.nombres && this.cliente.nombres.length>3) &&
            (this.cliente.apellidoPaterno && this.cliente.apellidoPaterno.length>3) &&
            (this.cliente.apellidoMaterno && this.cliente.apellidoMaterno.length>3))
        {
            valido=true;
        }
        return valido;
    }

    onMessage(message:string, esError:boolean):void{
        if(esError){
            this.errorMessage=message;
            setTimeout(() => {
                this.errorMessage = null;
            }, 3500); 
        }else{
            this.messageService=message;
            setTimeout(() => {
                this.messageService = null;
                this.router.navigateByUrl('/ventas/cliente');
            }, 3500);            
        }        
    }

}