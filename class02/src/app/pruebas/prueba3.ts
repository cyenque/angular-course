// LET y VAR
// ejemplo 1

var a = 7;
var b = 12;

if (a===7)
{
    let a =4;
    var b = 1;

    console.log("DENTRO del IF: a=" + a + " y b="+b);
    // DENTRO DEL IF: a=4 y b=1;
}

console.log("FUERA del IF: a=" + a + " y b="+b);
// FUERA DEL IF: a=7 y b=1;

// ejemplo 2
for (var i=0;i<5;i++){
    console.log(i);
    // 0,1,2,3,4
    // la idea es que viva solamente dentreo del for
}
console.log('Fuera del log: ' + i) // 'Fuera del log: 5

for (let i=0;i<5;i++){
    console.log(i);
    // 0,1,2,3,4
}
console.log('Fuera del log: ' + i) // ERROR: i is not defined