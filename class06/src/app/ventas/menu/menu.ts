import { IPermisos} from './permisos';

export interface IMenu{
    accion: string,
    permisos: IPermisos[]
}