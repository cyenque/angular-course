import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from 'rxjs/operators'
import { ICliente } from "./cliente";

@Injectable()
export class ClienteService {
    baseUrl:string;

    constructor( private http: HttpClient){
        this.baseUrl = '/api/clientes';
    }

    getClientes():Observable<ICliente[]>{
        return this.http.get<ICliente[]>(this.baseUrl)
            .pipe(
                catchError(error=>this.handleError(error))
            )
    }

    getCliente(id: number): Observable<ICliente> {
        if (id === 0) {
            return of(this.initializeCliente());
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<ICliente>(url)
            .pipe(
                tap(info=> console.log(info)),
                catchError(error=>this.handleError(error))
            )
    }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error['error'] || 'Server error');
    }

    initializeCliente():ICliente {
        return {
            id: 0,
            tipoDocumento:undefined,
            numeroDocumento:null,
            nombres:null,
            apellidoPaterno:null,
            apellidoMaterno:null,
            sexo:null,
            fechaNacimiento:null,
            credito:0,
            esActivo:null
        };
    }

}