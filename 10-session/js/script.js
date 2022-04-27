//.map => retorna un nuevo arreglo con la misma cantidad de elementos que tiene el arreglo que se itero



// const numeros = [2, 5, 6, 1];

// const numerosConCalculo = numeros.map((item, index, arr) => {
//     if(item < 3) {
//         return item 
//     }
// });

// const numerosFiltrados = numeros.filter((item, index) => item < 3);

// const numerosFiltrados = numeros.filter((item) => {
//     if(item < 3) {
//         return item 
//     }
// });

// console.log(numerosFiltrados)
// [ 2, 1]



// const numerosConCalculoForEach = numeros.forEach((item, index, arr) => {
//     return item + 3;
// });



const personas = [
    {
        nombre: 'jason',
        edad: 9,
    },
    {
        nombre: 'freddy',
        edad: 9,
    },
    {
        nombre: 'Penny',
        edad: 9,
    }, 
    {
        nombre: 'Arnold',
        edad: 9,
    }
];

// ['jason', 'freddy', 'Penny', 'Arnold']

const nombres = personas.map((item) => {
    // const frase = `hola soy ${item.nombre} y tengo ${item.edad}`
    return {
        villano: item.nombre,
        age: item.edad
    };
});

// - Crear una lista con los mentores y sus promedios
// -obtener la lista de mentores cuyo promedio sea mayor a 9.5 




const mentorsArray = [
  {
      name:"Ivan Diaz Alarcon",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:8
          },
          {
              signature:"ReactJS",
              score:8
          }
      ]
  },
  {
      name:"Alejandra Saenz Gonzalez",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:7
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
      name:"Alan Hernandex Hernandex",
      scores:[
          {
              signature:"HTML",
              score:9
          },
          {
              signature:"CSS",
              score:9
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:9
          }
      ]
  },
  {
      name:"Raul Aguirre Salazar",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:9
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
    name:"Pepito Potter Ron",
    scores:[
        {
            signature:"HTML",
            score:8
        },
        {
            signature:"CSS",
            score:10
        },
        {
            signature:"JS",
            score:9
        },
        {
            signature:"ReactJS",
            score:10
        }
    ]
}
]

const personajes = [
    {
        name: 'ron whisley'
    }
]

// const resultadoDeMentores = mentorsArray.map(( mentor ) => {
//     let accum = 0;
//     mentor.scores.forEach((calificacion) => {
//         accum += calificacion.score
//     });
//     const promedio = accum / mentor.scores.length;

//     const mentorInfo = {
//         nombre: mentor.name,
//         promedio,
//     };

//     return mentorInfo;
// });

// const aprovados = resultadoDeMentores.filter(( promedio ) => {
//     if(promedio.promedio > 9) {
//         return promedio;
//     }
// });


// console.log(resultadoDeMentores);
// console.log(aprovados);
// [
//     {
//         nombre: 'asdas',
//         promedio: 9,
//     },
//     {
//         nombre: 'adfdf',
//         promedio: 9,
//     }
// ]


// - Crear un nuevo arreglo con los mentores cuyo nombre inicien con una vocal 
// - Crear un nuevo arreglo con las inciales de cada mentor 





  const resultado = mentorsArray.filter(( mentor ) => {
    if(mentor.name[0].match(/[aeiou]/i)){
        return mentor;
    }
  });

//   console.log(resultado)


// input : [
//     'Ivan Diaz Alarcon'
// ]

// outpu: [
//     I.D.A
// ] 

const formatearNombre = (mentores) => {


    const result = mentores.map((item) => {
        const arrayName = item.name.split(" ");
        let accum = '';

        arrayName.forEach((firtsLetter) => {
            accum += firtsLetter.charAt(0) + '.'
        });

        return accum;
    });

    return result;
};

const formatted = formatearNombre(personajes)
// console.log(formatted)

const numbers = [1, 5, 9, 6, 2, 4];


const resultReduce = numbers.reduce(( accum, item, index, arr ) => {
    // console.log(accum)
    return item % 2 === 0 ? accum + item : accum;
}, 0);

// console.log(resultReduce)



// const resultadoDeMentores = mentorsArray.map(( mentor ) => {
//     let accum = 0;
//     mentor.scores.forEach((calificacion) => {
//         accum += calificacion.score
//     });
//     const promedio = accum / mentor.scores.length;

//     const mentorInfo = {
//         nombre: mentor.name,
//         promedio,
//     };

//     return mentorInfo;
// });


const mentorsList = mentorsArray.map(( item, index) => {
    const { scores } = item;
    const resultMentor = scores.reduce(( accum, item, index, arr) => {
        return accum + item.score
    }, 0)

    const primedio = resultMentor / item.scores.length;

    return primedio;
});

// console.log(mentorsList)




const estudiantes = [
    {
        nombre: 'jason',
        edad: 18,
    },
    {
        nombre: 'freddy',
        edad: 9,
    },
    {
        nombre: 'Penny',
        edad: 21,
    }, 
    {
        nombre: 'Arnold',
        edad: 6,
    }
];



// spread operator
// const mergeArray = [ ...estudiantes, ...estudiantesExternos ];


const personaInfo = {
    name: 'asdas',
    lastName: 'lastname'
}

const details = {
    height: 1.90,
    age: 20,
    name: 'ivan',
    lastName: 'Diaz',
    direccion:{
        calle: 'calle cualquera',
        numero: 123
    },
}

// destructuring Objetos
const name = 'otherName'
const { direccion,  lastName, age, name: nombre } = details;

// details.name
// details.age
// details.lastName

// console.log(direccion, lastName, age, nombre,  'lastName destrucuturado')

const estudiantesExternos = [
    {
        nombre: 'Gerald',
        edad: 6,
    }, 
    {
        nombre: 'Gelga',
        edad: 6,
    }
]

const [ primerEstudiante, segundoEstudiante, tercerEstudiante ] = estudiantesExternos;
console.log(tercerEstudiante, 'primerEstudiante');
















const mergeObjet = {...personaInfo, ...details, test: 'asd', test2: 'asda' }
// console.log(mergeObjet, 'mergeObjet')



const estudiantesAdultos = (estudiantesList) => {
    const result = estudiantesList.reduce((accum, item) => {
        if(item.edad >= 18) {
            return [ ...accum, item ]
        }
        return accum
    }, []);

    return result;
};

const filtro = estudiantesAdultos(estudiantes)
console.log(filtro)

// [
//     {
//         nombre: 'Penny',
//         edad: 21,
//     },

// ]


'asdasd'.charAt(0)

