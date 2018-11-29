import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ITipoDocumento } from './tipoDocumento';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class TipoDocumentoService {
    baseUrl:string;

    constructor( private http: HttpClient){
        this.baseUrl = '/api/tipoDocumentos';
    }

    getTipoDocumentos():Observable<ITipoDocumento[]>{
        return this.http.get<ITipoDocumento[]>(this.baseUrl)
            .pipe(
                tap(info=>console.log(info)),
                catchError(error=>this.handleError(error))
            )
    }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error['error'] || 'Server error');
    }

}