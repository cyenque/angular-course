// Destructuracion

/**
 * ARREGLOS
 */

let someArray = ["uno","dos","tres"];

//Sin desestructuración, tendrías que acceder los primeros tres elementos de un arreglo de la siguiente manera:
var first = someArray[0];
var second = someArray[1];
var third = someArray[2];

//Con desestructuración, el código equivalente es más conciso y legible:
var [first, second, third] = someArray;


//Cuando accedes elementos en un arreglo que están fuera de rango o no existen, obtienes el mismo resultado que obtendrías usando un índice: undefined.
console.log([][0]);
// undefined

//puedes ignorar elementos del arreglo que está siendo desestructurado:
var [,,tercero] = ["foo", "bar", "baz"];
console.log(tercero);
// "baz"

//puedes capturar todos los elementos restantes en un arreglo con un patrón “restante“:
var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]

/**
 * OBJETOS
 */

// Sucede porque comparten el mismo nombre a las propiedades
var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };

var { name: nameA } = robotA;
var { name: nameB } = robotB;

console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"

// Si vas a usar el mismo nombre
// Hay un atajo sintáctico útil para cuando la propiedad y la variable tienen el mismo nombre:

var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"

//Si queremos darle un nombre diferente a la variable, podemos hacerlo usando el formato {propiedad: variable}.

var persona = {
  nombre: 'pepe',
  edad: 20,
};

var {nombre: names} = persona;
console.log(names); // "pepe"


//También puedes proveer valores por defecto pra cuando la propiedad no está definida:
var [perdido = true] = [];
console.log(perdido);
// true

var { message: msg = "alguna cosa" } = {};
console.log(msg);
// "alguna cosa"

var { x = 3 } = {};
console.log(x);
// 3

//Desestructuración de parámetros.
//Algo cool de la desestructuración es que puede ser utilizada incluso en los parámetros de una función. Por lo que podemos pasar de algo como

function loggeaLaConfiguracion1(config) {
  var color = config.color;
  var imagen = config.imagen || 'default.jpg';

  console.log(color);
  console.log(imagen);
}

loggeaLaConfiguracion1({color: 'rojo'});
// "rojo"
// "default.jpg"

// Lo mismo ..a algo más sencillo:

function loggeaLaConfiguracion2({color, imagen='default.jpg'}) {
    console.log(color);
    console.log(imagen);
  }
  
  loggeaLaConfiguracion2({color: 'rojo'});
  // "rojo"
  // "default.jpg"