// aplicar filtro por signature
// input : 'Js'

// output:
//   {
//        signature: 'Js',
//        koders:  ["Ivan", "Freddy"],
//        mentor: 'ivan diaz'
//   }

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

// -crear una funcion que hara el filtrado y que reciba la materia
// - iterar el arreglo de generacion18 
// - hacer una comparacion de signature con la materia que pide usuario
// - si es igual imprimir en consola

// function filtrarPorMateria () {
//   let materia = prompt('Ingrese una materia');
//   for (let index = 0; index < generacion18.length; index++) {
//     if(materia === generacion18[index].signature) {
//       console.log(generacion18[index])
//     }
//   }


// };

// filtrarPorMateria()

let nombres = []
const saludar = (name) => {
  nombres.push(name)
};

saludar('ivan')




const filtrarPorMateria = (materia) => {
    let result = '';

    for (let index = 0; index < generacion18.length; index++) {
      if(materia === generacion18[index].signature) {
         result = generacion18[index];
      }
    }

    return result;
};

console.log(filtrarPorMateria('Js'))


// un callback es una function que es enviada como parametro a otra funcion
// hight order function es una funcion que recibe una funcion como parametro


// function cocinarPan(algo) {
//   console.log(algo)
// };

// function prepararCarne() {
//   console.log('carne preparada')

// }
// function picarTomate() {
//   console.log('tomate picado')
// }


// function armarHamburguesa (cocinarPan, cocinarCarne, picarTomate) {
//   let panPreparado = true

//   cocinarPan(panPreparado)
// };


// armarHamburguesa(panPreparado, carnePreparada);




// for each 
// Ejecuta el callback por cada elemento del arreglo 

const numeros = [ 2, 4, 5];

let resultado = 0

numeros.forEach(( item, index, arr ) => console.log(index))

console.log(resultado)






//  parametros nombrados
function informacionPersona({ nombre, apellido, curp, rfc, fechaNacimiento, direccion, edad, sexo }){

  return {
    nombre: nombre,
    apellido: apellido,
    curp: curp,
    rfc: rfc,
    fechaNacimiento: fechaNacimiento,
    direccion: direccion,
    edad: edad,
    sexo: sexo,
  }

}

informacionPersona({ curp: 'DIAI989s', nombre:'ivan', fechaNacimiento: 'ter' })


// destructuring 

Ejercicio 1

input 
[
  'Jason Vorhees',
  'Penny Wise',
  'Freddy Krueger',
]

output: 
[
  'koder 1: Jason Vorhees'
  'koder 2: Penny Wise',
  'koder 3: Freddy Krueger',
]



input:
[
  {
    koder: 'Arnold',
    score: 8,
  },
  {
    koder: 'Gerald',
    score: 8,
  },
  {
    koder: 'Gelga',
    score: 8,
  },
  {
    koder: 'Peer',
    score: 8,
  },
  {
    koder: 'Thomas',
    score: 8,
  }
];


<60 F
<70 D
<80 C
<90 B
<100 A


output: {
  promedio del grupo: 90
  calificacion del grupo: A
}