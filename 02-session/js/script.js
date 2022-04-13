function persona() {
    let apellido = 'Ramirez';
    
    // console.log(apellido);

    if(apellido) {
        console.log(apellido);
    }
}

persona()

// let num1 = prompt('Ingresa un numero');
// let num2 = prompt('Ingresa otro numero');


// console.log(Number(num1) + Number(num2));

// ----------- Operadores aritmeticos


// + 
// -
// *
// ++
// --



// ---- operadores de asignacion

// = 

// +=


let resultado = 10;


// console.log( 10 == '10')
// console.log( 10 === '10')
console.log( 10 !='10')
console.log( 10 !== '10')


console.log(5 >= 5);
// console.log(10 <  5);

// if(6 > 8) {
//     console.log('es mayor');
// } else if (6 === 6 ) {
//     console.log(' es igual')
// } else {
//    console.log('es menor') 
// }+


let nombre; // undefined = false

let apellido;


let usurioLogeado = true;


if(!usurioLogeado) {
    console.log('bloquear la cuenta')
} else {
    console.log('mandarlo al muro')
}

// if(nombre || apellido){
//     console.log('el usuario si tiene datos ')
// } else {
//     console.log('no hay datos')
// }


// if(5 > 4 && 10 < 5){
//     console.log('esto es verdadero')
// } else {
//     console.log('es falso ')
// }

// if(nombre){
//     console.log('si existe la variable nombre ')
// } else if(apellido) {
//     console.log('si existe apellido  ')
// } else if(segundoApellido) {
//     console.log('si existe segundo apellido  ')
// } else {
//     console.log('No existe ningun dato')
// }


// const name = 'ivan' + 'diaz';
// const fullName = `${name} este es mi nombre ${}`;





// 1. Pedir al usuario dos letras, y determinar si la primera aparece antes o después en el alfabeto.


// 2. Pedir 2 datos por prompt:
   
//    - Si a > b dividir a entre b
   
//    - Si a < b sumar a más b
   
//    - si a == b multiplicar ambos numeros
   
//    Imprimir el resultado en consola

// 3. Pedir al usuario por prompt un numero entre 1 y 100
    //- Verificar si es un par o impar e imprimir en resultado en consola

// 4- Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):

    // - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola
  
let integrante = {};
let instrumento = 'bateria';

switch (instrumento) {
    
    case 'bateria': {
       integrante.instrumento = 'bateria';
       integrante.nombre = 'baterista';
       break;
    }

    case 'guitarra': {
        integrante.instrumento = 'guitarra';
        integrante.nombre = 'guitarrista'
        break;
    }

    case 'trompeta': {
        integrante.instrumento = 'trompeta';
        integrante.nombre = 'trompetista'
        break;
    }

    default :
        console.log('yo toco otro instrumento');
}
console.log(integrante)



let genero = 'F';
let nombreDePersona = genero === 'F' ? 'Natalia' : 'Jorge'; 


console.log(nombreDePersona, 'persona')

if(genero === 'F') {

}else {
    
}