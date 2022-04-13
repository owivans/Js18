/*
Ejercicio 1:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

// string.replace(searchValue, newValue)
let name = 'Ivan armando diaz alarcon';
console.log(name.length);
console.log( name.replaceAll(' ', '' ).length )



/*
Ejercicio 2:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

// -Solicitar el nombre completo

const filtro = name.match(/[@]/gi);
console.log(filtro)



//input: Kodemia
// output: aimedoK


//input: cor aza
// output: azacor


// Cada #{name} tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
//     al estudiante que tiene a su lado


/*
Ejercicio 1:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

/*
Ejercicio 2:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

/*
Ejercicio 3:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

/*
Ejercicio 4
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/


function armarHamburguesa (pan, carne) {

    if(pan && carne) {
        return 'Ya esta lista la hamburguesa';
    } else {
        return 'No se ha armando la hamburguesa'
    }

};

function cocinarPan(leche, harina) {
    if( leche && harina) {
        return true
    } else {
        return false
    }
};

function prepararCarne(carne, condimentos, huevo) {
    if(carne && condimentos && huevo) {
        return true
    }else {
        return false
    }
}

let leche = true;
let harina = true;

let carne = true;
let condimentos = true;
let huevo = true;

let panPreparado = cocinarPan(leche, harina);
let carnePreparada = prepararCarne(carne, condimentos, huevo);

// armarHamburguesa(panPreparado, carnePreparada);

console.log(armarHamburguesa(panPreparado))





