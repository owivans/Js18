const h1 = document.createElement('h1');
const texto = document.createTextNode('este es un h1');

h1.appendChild(texto);

// document.body.appendChild(h1)


const koders = [
  'Jose',
  'Nestor',
  'Alan',
  'Chucho',
  'Danny'
];


// const ul = document.createElement('ul');
// const li = document.createElement('li');
// const koderName = document.createTextNode('Jose');
// li.appendChild(koderName);
// ul.appendChild(li);
// document.body.appendChild(ul)
// console.log(ul)

const ul = document.createElement('ul');

const createNode = (name) => {
  
  const li = document.createElement('li');
  const koderName = document.createTextNode(name);
  li.appendChild(koderName);
  ul.appendChild(li);
  document.body.appendChild(ul);
};


koders.forEach((item) => {
  createNode(item)
});



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


let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
];


const creartTable = () => {
console.log('seeeaea')
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const trHead = document.createElement('tr');

    const thName = document.createElement('th');
    const thAge = document.createElement('th');
    const thVacci = document.createElement('th');
    const thGender = document.createElement('th');

    const textName = document.createTextNode('name');
    const textAge = document.createTextNode('age');
    const textVacci = document.createTextNode('vaccinated');
    const textGender = document.createTextNode('gender');

    thName.appendChild(textName);
    thAge.appendChild(textAge);
    thVacci.appendChild(textVacci);
    thGender.appendChild(textGender);

    table.appendChild(thead);
    table.appendChild(tbody)

    thead.appendChild(trHead);
    trHead.appendChild(thName);
    trHead.appendChild(thAge);
    trHead.appendChild(thVacci);
    trHead.appendChild(thGender);
    
    document.body.appendChild(table);

    arrayPersons.forEach((persona) => {
        const trPerson = document.createElement('tr');

        const tdName = document.createElement('td');
        const tdAge = document.createElement('td');
        const tdVacci = document.createElement('td');

        const textValueName = document.createTextNode(persona.name);
        const textValueAge = document.createTextNode(persona.age);

        const isVacci = persona.vaccinated === true ? 'vaccinated' : 'no vaccinated';
        const textVacci = document.createTextNode(isVacci);

        tdName.appendChild(textValueName);
        tdAge.appendChild(textValueAge);
        tdVacci.appendChild(textVacci);

        trPerson.appendChild(tdName);
        trPerson.appendChild(tdAge);
        trPerson.appendChild(tdVacci);
        tbody.appendChild(trPerson);
    });
};

creartTable()





