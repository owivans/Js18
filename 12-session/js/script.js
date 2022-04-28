const persona = {
    name: 'Freddy',
    lastName: 'Krueger',
    saludar: function( params ) {
        console.log('hola');
    },
};

// persona.saludar();
let edad = 10

function sacarIniciales(name, lastName) {
    return `${name[0]}.${lastName[0]}`
}

function Persona (name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.inciales = sacarIniciales(this.name, this.lastName);
};

Persona.prototype.saludar = function (params) {
    console.log(` hola soy ${this.name}`)
}

const persona1 = new Persona('jason', 'vorhees');
persona1.saludar()
console.log(persona1)


const koders = [
  {
    name: "Harold",
    lastName: "López",
    birthday: "1996/06/24",
    generation: 9,
    bootcamp: "JavaScript",
    scores: [
      {
        module: "Frontend",
        score: 90
      },
      {
        module: "Backend",
        score: 80
      },
      {
        module: "Cloud",
        score: 80
      }
    ]
  },
  {
    name: "Arnold",
    lastName: "Osborn",
    birthday: "1998/05/12",
    generation: 1,
    bootcamp: "Python",
    scores: [
      {
        module: "Frontend",
        score: 90
      },
      {
        module: "Backend",
        score: 100
      },
      {
        module: "Cloud",
        score: 100
      }
    ]
  },
  {
    name: "Peter",
    lastName: "Parker",
    birthday: "1994/10/26",
    generation: 10,
    bootcamp: "JavaScript",
    scores: [
      {
        module: "Frontend",
        score: 100
      },
      {
        module: "Backend",
        score: 95
      },
      {
        module: "Cloud",
        score: 80
      }
    ]
  },
  {
    name: "Homer",
    lastName: "Simpson",
    birthday: "1996/06/24",
    generation: 1,
    bootcamp: "Python",
    scores: [
      {
        module: "Frontend",
        score: 98
      },
      {
        module: "Backend",
        score: 100
      },
      {
        module: "Cloud",
        score: 70
      }
    ]
  },
  {
    name: "Ren",
    lastName: "López",
    birthday: "1996/06/24",
    generation: 9,
    bootcamp: "JavaScript",
    scores: [
      {
        module: "Frontend",
        score: 80
      },
      {
        module: "Backend",
        score: 90
      },
      {
        module: "Cloud",
        score: 100
      }
    ]
  }
];

// Teniendo la siguiente coleccion de koders genera una coleccion de objetos de tipo koder
// Agregando ademas las siguientes funciones:

// Prototipo koder

// -Obtener la edad a partir de la fecha de nacimiento
// -Obtener promedio de sus scores
// -Tenga el name
// -Tenga el lastName
// -bootcamp

// ----------

// Obtener una coleccion de Koder que pertenezca a Javascript
// Obtener una coleccion de Koder que pertenezca a Python



