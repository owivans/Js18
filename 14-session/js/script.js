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
