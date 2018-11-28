// Constructor

class Vehiculo{
    marca:string="Volskwagen";
    modelo:string="Gol";
    numero_puertas:number=4;
    esSUV:boolean=false;

    constructor(marca:string, modelo:string){
        // Siempre el constructor tiene una ventaja en las propiedades de la clase
        // Se deberia asignar las variables en el constructor.

        //1        
        //this.modelo = "Jetta";

        //2
        this.marca = marca;
        this.modelo = modelo;
    }
}

// 1
//let carro:Vehiculo = new Vehiculo();

// 2
let carro:Vehiculo = new Vehiculo("Audi","A4");

console.log(carro);
// 1 log
/**
 * 
 * Vehiculo {marca="Volskwagen", modelo="Gol", numero_puertas=4, esSUV=false}
 * 
 */

// 2 log
/**
 * 
 * Vehiculo {marca="Volskwagen", modelo="Jetta", numero_puertas=4, esSUV=false}
 * 
 */

 // 2 log
/**
 * 
 * Vehiculo {marca="Audi", modelo="A4", numero_puertas=4, esSUV=false}
 * 
 */