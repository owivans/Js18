// JSON.stringify() transforma un objeto en formato Json
// JSON.parse() transforma un Json en un objeto

const URL_API = 'https://rickandmortyapi.com/api/character';
const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/.json';


const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            console.log(response);

            for(let property in response ) {
                response[property]
                console.log(response[property])
            }
        }
    }
});

//aqui construmos la peticion
// xhr.open("GET", URL_API);
xhr.open("GET", URL_FIREBASE )
// xhr.open("POST", URL_FIREBASE )

//aqui enviamos la peticion
xhr.send();
// xhr.send(JSON.stringify({
//     name: 'Freddy2',
//     lastName: 'Krueger',
// }));

console.log(xhr);



response[property]


const object = {
    fruta: 'sandia',
    color: 'verde',
};

let property = 'color'

object[property]

objecto['fruta']

objeto.fruta



const test = {
    "koder1": {
        "lastName": "Krueger",
        "name": "Freddy"
    },
    "koder2": {
        "lastName": "jason",
        "name": "Freddy"
    },
    "koder3": {
        "lastName": "penny",
        "name": "Wise"
    }
}

// let property = 'koder3';

// test[property]