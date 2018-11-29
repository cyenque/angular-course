import { ClienteService } from './cliente.service';
import { ICliente } from './cliente';
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ClienteResolver implements Resolve<ICliente>{

    constructor(private clienteService:ClienteService,
                private router:Router
        ){}

    resolve(route:ActivatedRouteSnapshot,state: RouterStateSnapshot):Observable<ICliente>{
        let id=route.params['id'];
        console.log(id);
        if(isNaN(id)){
            console.log(`ID cliente no es un numero: ${id}`);
            this.router.navigateByUrl('/cliente');
            return null;
        }
        return this.clienteService.getCliente(+id)
            .pipe(
                tap((info:ICliente)=>{
                    if(info) return info;    
                    }
                ),
                catchError(error=>this.handleError(error))
            )            
    }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error['error'] || 'Server error');
    }
}