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

// solicitar al usuario un numero

// construir un string con la misma longitud que ese numero
// -encotnrar una forma de obtener un numero o un string aleatorio

// -Ejecutar el procedimiento de generacion de caracter N cantidad veces

// Math.floor(Math.random() * (max - min)) + min;
//String.fromCharCode

// let longitudDeString = prompt('ingrese un numero');

function generarCaracter() {
  let codigoCaracter = Math.floor(Math.random() * (126 - 33)) + 33;
  let caracter = String.fromCharCode(codigoCaracter);
  return caracter;
}

function generarString(longitud) {
  let stringResult = "";
  for (let index = 0; index < longitud; index++) {
    stringResult += generarCaracter();
  }
  return stringResult;
}

// console.log(generarString(longitudDeString));

// Ejercicio 2:
// Pedir al usuario usuario un numero entre 1 y 10

// Imprimir la tabla de multiplicar de ese número
// p.ej.
// 3 x 1 = 3
// 3 x 2 = 6

// perdier el numero al usuario
// crear una funcion imprimir la tabla del numero que dio el usuario
// crear un ciclo for que inicie en 1 y termine en 10
// dentro del ciclo vamos a ejecutar una multiplicacion
// imprimir la salida de la operacion ejem 3 x 1 = 3

// let numeroDelaTabla = prompt('elige una tabla de multiplicar del 1 al 10');

function crearTabla(tablaDeMultiplicar) {
  console.log(tablaDeMultiplicar);

  const tabla = Number(tablaDeMultiplicar);

  for (let index = 1; index <= 10; index++) {
    console.log(`${tabla} x ${index} = ${tabla * index}`);
  }
}

// crearTabla(numeroDelaTabla);

// Ejercio 1

// -Pedir al usuarui un numero entre el 1 y el 10
// -imprimir todos los numeros pares que existen entre 1 y el numero selccionado

// Ejercicio 2
// imprimir en consla la sumaa total de todos los digitos de una cantidad
// input: 1234
// output: 10

// Ejercicio 3
// mostar en consola el sigueinte patron

// *
// **
// ***
// ****
// *****
// ******
// *******

// function repetCaracter(cantidad) {
//   let initial = "";
//   for (let index = 0; index < cantidad; index++) {
//     initial += "*";
//   }
//   return initial;
// };

// function construirPatron(length) {
//   for (let index = 0; index <= length; index++) {
//     console.log(repetCaracter(index));
//   }
// };

// construirPatron(20);

// Ejercicio 2
// imprimir en consla la sumaa total de todos los digitos de una cantidad
// input: 1234
// output: 10

// pedirle un numero al usuario
// guardarlo en una variable
// aplicar el metdod de split para crear un arreglo con el string
// recorer el string con un ciclo
// convertir a numero el elemento actual en ciclo
// guardarlo en una variable
// sumar el resto de elementos del arreglo

// const digitosDelUsuario = prompt('ingrese algunos numeros');
function sumar(digitos) {
  let array = digitos.split("");
  let accum = 0;
  for (let index = 0; index < array.length; index++) {
    accum += Number(array[index]);
  }
  return accum;
}

// console.log(sumar(digitosDelUsuario))

// *
// **
// ***
// ****
// *****

// function repetirHorizontal(repeticiones){
//   let simbolo = ''

//   for (let index = 0; index < repeticiones; index++) {
//     simbolo += '*'
//   }
//   console.log(simbolo)
//   return simbolo;
// }

// function repetirVertical(repeticiones) {
//   for (let index = 0; index < repeticiones; index++) {
//     repetirHorizontal(index)
//   }
//   return
// };

// repetirVertical(30)

// - - - Ejercicio # 3 - - -
/* mostar en consola el sigueinte patron
 1
 22
 333
 4444
 55555
 666666
 ******* */

// console.log('\n- - - Ejercicio # 3 - - -');
// let cadenaE3 = '';
// for (let j = 0; j < 20; j++) {
//   cadenaE3 += '*';
//   console.log(cadenaE3);
// }

// input
let koders = [
  ["jose", "de anda"],
  ["danny", "vazquez"],
  ["Aaron", "Enciso"]
];
// -----
//output
let result = [
  {
    nombre: "jose",
    apellido: "de anda",
    id: 1
  },
  {
    nombre: "danny",
    apellido: "vazquez",
    id: 2
  },
  {
    nombre: "Aaron",
    apellido: "Enciso",
    id: 3
  }
];

// incializar una variable con un arreglo vacio
// crear un ciclo for para iterar la variable de koders
// por cada elemento del arreglo es necesario generar un objeto
// con la posicion 0 del elemento crear la propiedad nombre
// con la posicion 1 del elemento crear la propiedad apellido
// asignarle al arreglo vacio el objeto creado

function generateKoders() {
  let newKoders = [];

  for (let index = 0; index < koders.length; index++) {
    let infoKoder = {
      nombre: koders[index][0],
      apellido: koders[index][1],
      id: index + 1
    };
    newKoders.push(infoKoder);
  }
  console.log(newKoders);
  return newKoders;
}

generateKoders();

// aplicar filtro por signature
// input : 'Js'

// output:
//   {
//        signature: 'Js',
//        koders: [
//           'ivan',
//           'isra'
//        ],
//       mentor: 'ivan diaz'
//   }

input: "Freddy";
output: ["Js", "HTML", "React"];

const generacion18 = [
  {
    signature: "Js",
    koders: ["Ivan", "Freddy"],
    mentor: "Ivan Diaz"
  },
  {
    signature: "HTML",
    koders: ["Jason", "Penny", "Freddy"],
    mentor: "Alan "
  },
  {
    signature: "CSS",
    koders: ["Arnold", "Gerald"],
    mentor: "David "
  },
  {
    signature: "Introduccion",
    koders: ["Steve", "Charlie"],
    mentor: "Elvira "
  },
  {
    signature: "React",
    koders: ["Ivan", "Harry", "Freddy"],
    mentor: "Alejandra"
  }
];
