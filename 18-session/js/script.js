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
    person = {};
    renderList()
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
    button.setAttribute('data-index', index)
    button.textContent = 'Eliminar'
    li.appendChild(button)
    button.addEventListener('click', (event) => {
        const removeIndex = event.target.dataset.index;
        personList.splice(removeIndex, 1);
        renderList()
    });
};

const renderList = () => {
    while(ul.children.length > 0) {
        ul.firstChild.remove()
    }
    personList.forEach((person, index) => {
        createLi(person, index)
    });
};

renderList()
document.body.appendChild(ul)


{/* <li class="list-group-item">
persona 1 
<button class='btn btn-primary'>Seleccionar</button>
</li> */}