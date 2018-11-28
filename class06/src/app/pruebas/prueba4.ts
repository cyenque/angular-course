// Template Literales

//1
var saludo:string= "Hola, " + miNombre;     // Hola Cesar
var saludo2:string= `Hola, ${miNombre}`;    // Hola Cesar

//2
let nombre:string="Cesar";
let edad:number=39;
let pais:string="Peru";

console.log("Hola, me llamo " + nombre + ", tengo " + edad + " años y soy de " + pais + ".");
// Hola, me llamo Cesar, tengo 39 años y soy de Peru

console.log(`Hola me llamo ${nombre}, tengo ${edad} años y soy de ${pais}`)
// Hola, me llamo Cesar, tengo 39 años y soy de Peru

//3
console.log('Esto es una línea\n' +
    'Esto es otra línea\n' +
    'y esto es la 3a línea');

console.log(`Esto es una línea
    Esto es otra línea
    y esto es la 3a línea`);

//4
const data = {
    nombre: "Google Pixel L",
    imagen: "http://example.com/miImagen.png",
    precio: 699,
 };

const myTemplate = "<article>" + 
                    "<h1>" + data.nombre + "</h1>" + 
                    "<img src=" + data.imagen + "/>" + 
                    "<span>"+ data.precio +"US$ </span>"+
                    "</article>";

const myTemplate1 = `<article>
<h1>${data.nombre}</h1>
<img src="${data.imagen}" />
<span>${data.precio} US$ </span>
</article>`;

