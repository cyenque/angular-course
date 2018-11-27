// Funciones

/**
 * Parametros Default 
 */

//1
function multiplicar(a, b = 1) {
    return a*b;
  }
  
multiplicar(5); // 5

//2
var myFunc1 = function ( param1 = 'Hola', param2 = 'Mundo' ) {
    return param1 + ' ' + param2;
};
 
console.info( myFunc1() ); // Hola Mundo
console.info( myFunc1( undefined, undefined ) ); // Hola Mundo
console.info( myFunc1( 'Adios', 'Lenin' ) ); // Adios Lenin


/**
 * Parametros Obligatorios 
 */

// 4
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

/**
 * Parametros Condicionales
 */
function buildName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1b = buildName2("Bob");                  // trabaja correcto
//let result2b = buildName2("Bob", "Adams", "Sr.");  // error, muchos parametros
let result3b = buildName2("Bob", "Adams");         // correcto todos los parametos
