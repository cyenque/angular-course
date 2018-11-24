import { Component, OnInit } from "@angular/core";
import { IMenu } from "./menu/menu";

@Component({
    templateUrl: './ventas.component.html'
})
export class VentasComponent implements OnInit {
    pageTitle:string;
    menus: IMenu[];
    constructor(){
        this.pageTitle = "Sygno Web - Ventas";
    }

    ngOnInit(): void {
        // Datos planos

        // menus deberia traerse de un servicio.
        this.menus = [];
        let menu1:IMenu={
            "accion": "Mantenimientos",
            "permisos": [
                {
                    "idModuloPermiso": 1,
                    "idModulo": 1,
                    "descripcion": "Cliente",
                    "accion": "Mantenimientos",
                    "url": "/ventas/mantenimientos/cliente",
                    "habilitado": true
                },
                {
                    "idModuloPermiso": 2,
                    "idModulo": 1,
                    "descripcion": "Servicio",
                    "accion": "Mantenimientos",
                    "url": "/ventas/mantenimientos/servicio",
                    "habilitado": false
                }
            ]            
        }

        let menu2:IMenu={
            "accion": "Procesos",
            "permisos": [
                {
                    "idModuloPermiso": 3,
                    "idModulo": 1,
                    "descripcion": "Facturación",
                    "accion": "Procesos",
                    "url": "/ventas/procesos/facturacion",
                    "habilitado": false
                },
            ]            
        }

        let menu3:IMenu={
            "accion": "Contabilidad",
            "permisos": [
                {
                    "idModuloPermiso": 6,
                    "idModulo": 1,
                    "descripcion": "Generador",
                    "accion": "Contabilidad",
                    "url": "/ventas/contabilidad/generador",                   
                    "habilitado": false
                },
            ]            
        }
        this.menus.push(menu1);
        this.menus.push(menu2);
        this.menus.push(menu3);

    }
    
}