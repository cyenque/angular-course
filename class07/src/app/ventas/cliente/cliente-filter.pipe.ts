import { Pipe, PipeTransform } from "@angular/core";
import { ICliente } from "./cliente";

@Pipe({
    name:'clienteFilter'
})
export class ClienteFilterPipe implements PipeTransform{
    
    transform(value:ICliente[], filterBy:string):ICliente[]
    {
        filterBy = filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy?value.filter(
            (cliente: ICliente)=>
                cliente.nombres.toLocaleLowerCase().indexOf(filterBy)!==-1):value;
    }
}