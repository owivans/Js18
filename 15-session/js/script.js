const buttonList = document.querySelectorAll('.btn');

console.log(buttonList)

buttonList.forEach((button, index) => {

    button.classList.add('btn-danger');
    button.setAttribute('data-custom', `button${index}`);

    button.addEventListener('click', (event) => {
        console.log('se le dio click a un boton')
        console.log(event.target.dataset.custom)
    })

})
