let autos = [
    'ford',
    'ferrari',
    'nissan'
];

let autosDelujo = [
    'mercedez',
    'buggatti',
    'audi'
];

// console.log(autos.pop()) aqui se imprime el que removios
// console.log(autos)

// autos.unshift('bochito')
// autos.shift()

// autos.reverse(); // invierte el array , modificando el array original

// autos.concat(autosDelujo); //concatenar uno o más arrays
let autosMezclados = autos.concat(autosDelujo)
console.log(autosMezclados)
// let resultado = [];
// for (let index = 0; index < autos.length; index++) {
//     let autosConMarca = {
//         marca: autos[index],
//         model: '2000',
//     };

//     resultado.push(autosConMarca)
// }
// console.log(resultado

// output

// [
//     {
//         marca:'ford'
//     },
//     {
//         marca: 'ferrari',
//     }
// ]
