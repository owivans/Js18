let personas = [
    'peter',
    'jose',
    'alan',
    'peter',
    'jose',
    'alan',
    'peter',
    'jose',
    'alan'
];

function cicloWhile() {
    let index = 0;

    while(index < 5) {
        ++index
        console.log(index)
    }
}

// cicloWhile();
function cicloDoWhile() {
    let index = 0
    do {
        ++index
        console.log(index)
    } while(9 < 5);
}

// cicloDoWhile()
for ( let index = 0; index < personas.length; index++ ) {
    console.log(personas[index])
}


// input: kodemia
// output: KoDeMiA

// posicion par va cambiar a maysuculas ?

//con ayuda de un ciclo voy ejecutar las siguientes instrucciones:
// evaluar si el index o posicion es par
// si es par cambiarlo am mayusculas
// de lo contrario dejar la letra es su estado inicial

let palabra = prompt('Inserta una palabra');

function convertirPalabra(palabraParaCovertir) {
    // kodemia
    let result = '';
   for (let index = 0; index < palabraParaCovertir.length; index++) {
        if(index % 2 === 0){
            result += palabraParaCovertir[index].toUpperCase();
        } else{
            result += palabraParaCovertir[index].toLowerCase()
        }
   }

   console.log(result)
    
}

// personas[2];

//toUpperCase convuete unstring a maysuculas
//toLowerCase convuete unstring a manisculas

convertirPalabra(palabra);

// 
// Ejercicio 1:

// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios, 
// la longitud del string debe ser igual que el numero que ingreso el usuario
// input : 6
// output: '6AQX>H'

// Ejercicio 2:
// Pedir al usuario usuario un numero entre 1 y 10

// Imprimir la tabla de multiplicar de ese número
// p.ej.
// 3 x 1 = 3
// 3 x 2 = 6