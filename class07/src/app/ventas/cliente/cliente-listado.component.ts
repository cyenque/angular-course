import { ActivatedRoute } from '@angular/router';
import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { ICliente } from './cliente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteModalContent } from '../modals/confirm-delete.modal.content';
@Component({
    templateUrl: './cliente-listado.component.html',
    styleUrls: ['./cliente-listado.component.css']
})
export class ClienteListadoComponent implements OnInit{
    
    pageTitle:string;
    errorMessage:string;
    messageService:string;

    listFilter:string;

    clientes: ICliente[];

    constructor(private clienteService: ClienteService, 
                private modalService:NgbModal,
                private route:ActivatedRoute){
        this.pageTitle='Listado de Clientes';
    }

    ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        
        this.clienteService.getClientes().subscribe(
            info=>{
                console.log(info);
                this.clientes=info
            },
            error=>this.errorMessage=error
        )
    }
    
    deleteCliente(cliente:ICliente):void{
        if(cliente){
            let mensaje:string='';
            let deshabilitar:boolean=false;

            mensaje = '<p> Seguro que desea eliminar el cliente?'+ "<br />" +  
                    cliente.tipoDocumento  + "<br />" + 
                    cliente.numeroDocumento + "<br />";
    
            const modalRef = this.modalService.open(ConfirmDeleteModalContent);
            modalRef.componentInstance.IdTitle="Cliente - Eliminar";
            modalRef.componentInstance.IdMessage = mensaje;
            modalRef.componentInstance.IdButton="Eliminar"
            modalRef.componentInstance.IdConfirm= deshabilitar;

            modalRef.componentInstance.confirmEvent
            .subscribe(
                valor => {
                    if(valor!=undefined || valor!=null){
                        //console.log(valor);
                        if(valor==true){
                            // True;
                            this.onEliminacion(cliente);
                        }
                    }
                }
            );
        }
    }

    onEliminacion(cliente:ICliente):void{
        if(cliente){
            this.clienteService.deleteCliente(cliente)
                .subscribe(
                info=>{this.onMessage(`El cliente ${cliente.nombres} ${cliente.apellidoPaterno} se eliminó satisfactoriamente.`,false);
                    location.reload();
                }
            )
        }
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
            }, 3500);            
        }        
    }
    
}