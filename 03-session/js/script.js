// 1- Evaluar una calificacion
// -Solicitar una puntiacion al usuario de 0 a 100
// -Evaluemos con un if si su calificacions es A, B, C, D, E, etc
// -Mostremos con un switch su calificacion.
	
// Calificaciónes
// < 60  calificacion 'F'
// < 70 calificacion 'D'
// < 80 calificacion C
// < 90 calificacion B
// < 100 calificacion A

// --------------------------------------------
// 2- Casa de cambio

// Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de cambio para hacer la conversion de  la cantidad capturada. ejemplo: 

// 1-¿Que cantidad en MXN deseas convertir ?
// R= 1500 MXN
// 2¿A que pais vas a viajar?
// R= USA

// salida de la funcion: '$1500MXN (moneda local elegida por el usuario) equivale a $750USD(moneda del pais ingresado por el usuario)'

// Considerar minimo 4 tipo de monedas

// output:  '100 MXN equivale a 50 USD'


// Solicitar una califacion y guardarla en una variable
//usando la variable de puntiacion voy hacer un if   para deducur la calificacion
// voy a evualar la variable de la calificacion con switch para determinar que voy mostrar en la consola

// Calificaciónes
// < 60  calificacion 'F'
// < 70 calificacion 'D'
// < 80 calificacion C
// < 90 calificacion B
// < 100 calificacion A

// let puntuacionAsignada = prompt('ingresa puntiacion del 0 al 100'); // 50

function calcularCalificacion(puntuacionDelUsuario) {
    let puntuacion = Number(puntuacionDelUsuario);
    let calificacion;
    
    console.log(puntuacion)
    if(puntuacion < 60) {
        calificacion = 'F'
    } else if(puntuacion <= 70) {
        calificacion = 'D'
    } else if(puntuacion <= 80) {
        calificacion = 'C'
    } else if(puntuacion <= 90) {
        calificacion = 'B'
    } else if(puntuacion <= 100) {
        calificacion = 'A'
    } else {
        calificacion = 'Dato invalido'
    };
    return calificacion;
};

// let calificacionCalculada = calcularCalificacion(puntuacionAsignada); // A


function mostrarCalificacion(calificacionFinal) {
    switch(calificacionFinal) {
        case 'F': 
            console.log('Estas reprobado sacaste:' + calificacionFinal)
        break;
        case 'D': 
            console.log('Estas reprobado sacaste:' + calificacionFinal)
        break;
        default:
            console.log(calificacionFinal)
    }
    console.log(calificacionFinal, 'calificacion')
};

// mostrarCalificacion(calificacionCalculada)




const persona = {
    calcular: function() {

    }
}

let nombre = 'ivan';

console.log(nombre);


// let nombrePersona = "Ivan Diaz Alarcon";
// let apellido = 'Diaz'
// let char = `${nombrePersona.charAt()} ${apellido.charAt()}`

let nombreComplet = 'Ivan Diaz Alarcon';

console.log(nombreComplet.slice(5,-3))



