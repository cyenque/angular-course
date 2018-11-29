import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { ICliente } from './cliente';
import { ITipoDocumento } from '../tipoDocumento/tipoDocumento';

export class ClienteData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let clientes: ICliente[] = [
            {
                id: 1,
                tipoDocumento: 'DNI',
                numeroDocumento:'12345678',
                nombres: 'Cesar',
                apellidoPaterno: 'Yenque',
                apellidoMaterno: 'Leon',
                sexo: 'M',
                fechaNacimiento: '1978-12-08',
                credito: 10000,
                esActivo: true
            },
            {
                id: 2,
                tipoDocumento: 'PASAPORTE',
                numeroDocumento:'87654321',
                nombres: 'Prueba',
                apellidoPaterno: 'Paterno',
                apellidoMaterno: 'Materno',
                sexo: 'F',
                fechaNacimiento: '1983-08-15',
                credito: 2500,
                esActivo: false
            },
            {
                id: 3,
                tipoDocumento: 'DNI',
                numeroDocumento:'54525883',
                nombres: 'Juan',
                apellidoPaterno: 'Perez',
                apellidoMaterno: 'Lopez',
                sexo: 'M',
                fechaNacimiento: '1980-11-01',
                credito: 5000,
                esActivo: true
            },
            {
                id: 4,
                tipoDocumento: 'CARNET EXT',
                numeroDocumento:'P0014585',
                nombres: 'Alicia',
                apellidoPaterno: 'Lozano',
                apellidoMaterno: 'Perez',
                sexo: 'F',
                fechaNacimiento: '1998-04-30',
                credito: 8000,
                esActivo: true
            },
            {
                id: 5,
                tipoDocumento: 'DNI',
                numeroDocumento:'96547585',
                nombres: 'Fulano',
                apellidoPaterno: 'Mengano',
                apellidoMaterno: 'Sultano',
                sexo: 'M',
                fechaNacimiento: '1974-03-31',
                credito: 2600,
                esActivo: false
            }
        ];
        let tipoDocumentos: ITipoDocumento[]=[
            {
                id:1,
                descripcion:'DNI'
            },
            {
                id:2,
                descripcion:'PASAPORTE'
            },
            {
                id:3,
                descripcion:'CARNET EXT'
            },
            {
                id:4,
                descripcion:'OTROS'
            }
        ]
        return { clientes, tipoDocumentos };
    }
}
