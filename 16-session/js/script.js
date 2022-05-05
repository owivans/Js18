// -agregar la funcionalidad a los botones
//     seleccionar desde javascript los botones con la clase btn
//     agregarles un lisener a cada boton para escuchar el evento click
//     especificar a que boton se le dio click y depende de eso para ejecutar la suma o la resta

//     acceder al id counter para actualizar el contador con el resultado de la  operacion (suma/ resta)


// const buttons = document.querySelectorAll('.btn');
// const counterElement = document.querySelector('#counter');
// buttons[1].disabled = true;        

// console.log(counterElement)

// let counter = 0;
// buttons.forEach( (button, index) => {
//     button.addEventListener('click', (event) => {
//         const operationType = event.target.dataset.operation;
//         operationType === 'suma' ? ++counter : --counter
//         counterElement.textContent = counter;
//         buttons[1].disabled = counter <= 0 ? true : false;
//     });
// });

// const input = document.querySelector('#myInput');
// const h1 = document.querySelector('h1');

// input.addEventListener('keyup', (event) => {
//     h1.textContent = event.target.value
// })
// console.log(input)


const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        console.log(event.target.value)
    });
});

console.log(inputs)







// button1.addEventListener('click', () => {

// });
