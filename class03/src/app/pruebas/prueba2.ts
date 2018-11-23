// Tipos de datos

// boolean
var esSoltero: boolean = false;

// number
var miNumero: number = 7;

// string
var miNombre:string ="Cesar";

// Arrays
var cuentas: number[] = [1,2,3,4];
var cuentas2: Array<number> = [1,2,3,4];
var letras: string[] = ["a","b","c"];
var nombres:Array<string> = ["cesar","jose","miguel"];

// Enums
var control = 1;
enum Direcciones{ Arriba, Abajo, Izquierda, Derecha };

if(control === Direcciones.Derecha){
    // Mover jugador a la derecha
}

// Void  buena practica no devuelve ningun valor
function saludar(nombre:string):void{
    console.log("Hola, "+nombre);
}
