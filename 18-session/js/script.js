// obtnener los inputs con un selector para obtener el value
// obtener el boton de submit con un selector
// agregar un listener al boton con el evento de click
// crear un objeto con el nombre y apellido
// agregar el objeto de los inputs a una array
// crear los elementos con el contenido del array
    // -el elemento debe tener el nombre de la persona
    // -un boton para eliminar
    //     -agregarle un listener al boton de eliminar

// [
//     {
//         nombre:
//         apellido:
//     }
// ]



const onPostRequest = (person) => {

    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                onGuestRequest();
            }
        }
    });

    const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/equipoIvan.json';

    xhr.open('POST', URL_FIREBASE );
    xhr.send(JSON.stringify(person));
};

const onGuestRequest = () => {
    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener('readystatechange', () => {
        const personList = [];
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.response);
                console.log(response)
                for(let property in response) {
                    // console.log(response[property]);
                    const persona = {
                        id: property,
                        ...response[property],
                    }
                    personList.push(persona);
                }

                console.log(personList, 'personList')
                renderList(personList);
            }
        }
    });
    // spread operator 'copia' el contenido de un objeto omde una rreglo

    const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/equipoIvan.json';

    xhr.open('GET', URL_FIREBASE );
    xhr.send();
};
const onDeleteRequest = (idPerson) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                alert(` La persona con este id ${idPerson} fue eliminada señor stark`)
                onGuestRequest()
            }
        }
    });

    let URL_FIREBASE = `https://koders-88d77-default-rtdb.firebaseio.com/equipoIvan/${idPerson}.json`;
    if(idPerson) {
        xhr.open('DELETE', URL_FIREBASE );
        xhr.send();
    }
};
onGuestRequest()



const inputs = document.querySelectorAll('.form-control');
const button = document.querySelector('#createPerson');
const ul = document.querySelector('ul');

let person = {};
const personList = [];

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        if(event.target.name === 'nombre') {
            person.nombre = event.target.value
        } else {
            person.apellido = event.target.value
        }
    });
});

button.addEventListener('click', (event)=>{
    personList.push(person);
    console.log(personList)
    // aqui se tiene que hacer la peticion post
    onPostRequest(person);
    // renderList()
});

const createLi = (person, index) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item')
    ul.appendChild(li);
    const text = document.createTextNode(`${person.nombre} ${person.apellido}`);
    li.appendChild(text);

    const button = document.createElement('button');
    button.classList.add('btn-danger');
    button.classList.add('btn');
    button.textContent = 'Eliminar'
    button.setAttribute('id', person.id)
    li.appendChild(button)
    button.addEventListener('click', (event) => {
        const removeId = event.target.id;
        onDeleteRequest(removeId)
        // renderList()
    });
};

const renderList = (personListNew) => {
    while(ul.children.length > 0) {
        ul.firstChild.remove()
    }
    personListNew.forEach((person) => {
        createLi(person)
    });
};
document.body.appendChild(ul)


{/* <li class="list-group-item">
persona 1 
<button class='btn btn-primary'>Seleccionar</button>
</li> */}