// 1- crearer una tabla
// 2- crear el thead
//     -crear tr
//     -crear 6 celdas con sus nombres

// 3-crear el tbody
//     crear un tr   table row
//     crear 6 celdas
//         -crear un botton en la selda de acciones 

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
        ],
        promedio: 8
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
        ],
        promedio: 9
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
        ],
        promedio: 6
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
        ],
        promedio : 5
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
      ],
      promedio: 10,
  },
  {
    name:"Freddy Krueger",
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
    ],
    promedio: 10,
}
  ]


const table = document.createElement('table');
const tHead = document.createElement('thead');
const tBody = document.createElement('tbody');

table.appendChild(tHead)
table.appendChild(tBody)
document.body.appendChild(table);

const createTableHead = () => {
    const trHead = document.createElement('tr');

    const tdName = document.createElement('td');
    const tdHTML = document.createElement('td');
    const tdCSS = document.createElement('td');
    const tdJS = document.createElement('td');
    const tdReactJS = document.createElement('td');
    const tdPromedio = document.createElement('td');
    const tdAccion = document.createElement('td');

    tdName.textContent = 'Nombre'
    tdHTML.textContent = 'HTML'
    tdCSS.textContent = 'CSS'
    tdJS.textContent = 'JS';
    tdReactJS.textContent = 'ReactJS';
    tdPromedio.textContent = 'Promedio';
    tdAccion.textContent = 'Accion';

    trHead.appendChild(tdName)
    trHead.appendChild(tdHTML)
    trHead.appendChild(tdCSS)
    trHead.appendChild(tdJS)
    trHead.appendChild(tdReactJS)
    trHead.appendChild(tdPromedio)
    trHead.appendChild(tdAccion)

    tHead.appendChild(trHead);
};

const createRow = (mentorInfo) => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');

    tdName.textContent = mentorInfo.name;
    tr.appendChild(tdName);
    
    mentorInfo.scores.forEach((signature) => {
        const tdSignature = document.createElement('td');
        tdSignature.textContent = signature.score
        console.log(signature)
        tr.appendChild(tdSignature);
    });

    const tdPromedio = document.createElement('td');
    tdPromedio.textContent = mentorInfo.promedio;
    tr.appendChild(tdPromedio);

    const button = document.createElement('button');
    button.textContent = 'Eliminar';
    tr.appendChild(button);

    tBody.appendChild(tr);
};


const createTable = (mentorList) => {
    createTableHead()
    console.log(mentorList)

    mentorList.forEach((mentor) => {
        createRow(mentor)
    });


// createRow(
//     {
//         name:"Pepito Potter Ron",
//         scores:[
//             {
//                 signature:"HTML",
//                 score:8
//             },
//             {
//                 signature:"CSS",
//                 score:10
//             },
//             {
//                 signature:"JS",
//                 score:9
//             },
//             {
//                 signature:"ReactJS",
//                 score:10
//             }
//         ],
//         promedio: 10,
//     }
// )
}




createTable(mentorsArray)
// createTableHead()