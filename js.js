// Definir la contraseña deseada
var contrasenaGuardada = "1023";

// Bucle para solicitar la contraseña hasta que sea correcta
while (true) {
    // Solicitar al usuario que ingrese la contraseña
    var passwordUsuario = prompt("Por favor, ingrese la contraseña:");

    // Verificar si la contraseña ingresada es correcta
    if (passwordUsuario === contrasenaGuardada) {
        alert("Contraseña correcta. Puedes continuar con el programa.");
        // Salir del bucle cuando la contraseña es correcta
        break;
    } else {
        alert("Contraseña incorrecta. Vuelve a intentar.");
    }
}

// Código principal del programa aquí
console.log("¡Bienvenido al programa!");

var cantidadDatos;
var numGuia;
let PrediccionNum;
let historialAciertos = [];
var resultados = [];
var fuerzas = [];
let registerF = [];
let history = [];
var numeroint;
let contEvent = 0;
var probabilidad = [];
// Objeto para asociar los arrays a cada caso
var registros = {};

let registerF0 = [], registerF1 = [], registerF2 = [], registerF3 = [], registerF4 = [], registerF5 = [], registerF6 = [], registerF7 = [], registerF8 = [], registerF9 = [], registerF10 = [], registerF11 = [], registerF12 = [], registerF13 = [], registerF14 = [], registerF15 = [], registerF16 = [], registerF17 = [], registerF18 = [], registerF19 = [], registerF20 = [], registerF21 = [], registerF22 = [], registerF23 = [], registerF24 = [], registerF25 = [], registerF26 = [], registerF27 = [], registerF28 = [], registerF29 = [], registerF30 = [], registerF31 = [], registerF32 = [], registerF33 = [], registerF34 = [], registerF35 = [], registerF36 = [], registerF37 = [];


let F0 = [], F1 = [], F2 = [], F3 = [], F4 = [], F5 = [], F6 = [], F7 = [], F8 = [], F9 = [], F10 = [], F11 = [], F12 = [], F13 = [], F14 = [], F15 = [], F16 = [], F17 = [], F18 = [], F19 = [], F20 = [], F21 = [], F22 = [], F23 = [], F24 = [], F25 = [], F26 = [], F27 = [], F28 = [], F29 = [], F30 = [], F31 = [], F32 = [], F33 = [], F34 = [], F35 = [], F36 = [], F37 = [];
// Ejemplo de arrays para cada caso
let arrays = {
    f0: [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2],

    f1: [1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13],

    f2: [2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14],

    f3: [3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15],

    f4: [4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16],

    f5: [5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17],

    f6: [6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18],

    f7: [7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11],

    f8: [8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12],

    f9: [9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28],

    f10: [10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27],

    f11: [11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30],

    f12: [12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29],

    f13: [13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36],

    f14: [14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35],

    f15: [15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34],

    f16: [16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33],

    f17: [17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32],

    f18: [18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31],

    f19: [19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8],

    f20: [20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7],

    f21: [21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6],

    f22: [22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5],

    f23: [23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4],

    f24: [24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3],

    f25: [25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10],

    f26: [26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9],

    f27: [27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37],

    f28: [28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0],

    f29: [29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25],

    f30: [30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26],

    f31: [31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19],

    f32: [32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20],

    f33: [33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21],

    f34: [34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22],

    f35: [35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23],

    f36: [36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24],

    f37: [37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1],
};
function ingresarNumDatos() {
    var numDatosInput = document.getElementById("numDatos");
    cantidadDatos = parseInt(numDatosInput.value);
    numDatosInput.parentElement.style.display = "none";
    document.getElementById("inGuia").style.display = "block";
    // Verificar si el valor no es un número o es menor o igual a cero
    if (isNaN(cantidadDatos) || cantidadDatos <= 0) {
        // Mostrar una alerta si el valor no es un número positivo mayor que cero
        alert("Ingrese solo números positivos mayores que cero para la cantidad de datos.");
        // Limpiar el contenido de la caja de texto
        numDatosInput.value = "";
        // Salir de la función
        return;
    }

}

function ingresarNumGuia() {
    var numGuiaInput = document.getElementById("numGuia");
    var numGuiaValue = parseInt(numGuiaInput.value);

    // Validar que numGuiaValue esté en el rango de 0 a 37
    if (!isNaN(numGuiaValue) && numGuiaValue >= 0 && numGuiaValue <= 37) {
        numGuia = numGuiaValue;
        numGuiaInput.parentElement.style.display = "none";
        document.getElementById("inNum").style.display = "block";
        //   document.getElementById("resultados").style.display = "block";
    } else {
        alert("Por favor, ingrese un valor válido entre 0 y 37.");
        // Puedes agregar más lógica aquí según tus necesidades
    }

}


function consultarNumero() {

    // Llamada a la función para simular un nuevo evento
    incrementarContadorYMostrarEnDOM();
    numPrediccion = [];  // Limpiar el array cada vez que se consulta un nuevo número
    var numInput = document.getElementById("num");
    var inNum = parseInt(numInput.value);



    // Verificar si el valor está dentro del rango deseado (0 a 37)
    if (isNaN(inNum) || inNum < 0 || inNum > 37) {
        // Mostrar una alerta si el valor no está en el rango deseado
        alert("Ingrese solo números entre 0 y 37.");
        // Limpiar el contenido de la caja de texto
        numInput.value = "";
        // Salir de la función
        return;
    }






    //agregue inNum a la  variable global PrediccionNum;
    PrediccionNum = inNum;
    //ilnlgreso dztos a  array history[];
    history.unshift(inNum);
    //imporimi array hisstory en DON
    mostrarArrayEnDOM(history, "history");





    // resultados.push(`Número Guía: ${numGuia}, Número Consultado: ${inNum}`);

    // Utiliza el valor de numGuia para realizar acciones según el caso
    switch (numGuia) {


        case 0:
            // Agrega el elemento en la posición 0 de fuerzas a F0 
            //  fuerzas.unshift(f0.indexOf(inNum));
            fuerzas.unshift(arrays.f0.indexOf(inNum));


            break;
        case 1:
            // Agrega el elemento en la posición 0 de fuerzas a F1 
            fuerzas.unshift(arrays.f1.indexOf(inNum));
            // Llenamos registerF0 con el contador para marcar el tiempo 

            break;

        case 2:
            // Agrega el elemento en la posición 0 de fuerzas a F2 
            fuerzas.unshift(arrays.f2.indexOf(inNum));

            break;

        case 3:
            // Agrega el elemento en la posición 0 de fuerzas a F3 
            fuerzas.unshift(arrays.f3.indexOf(inNum));

            break;

        case 4:
            // Agrega el elemento en la posición 0 de fuerzas a F4 
            fuerzas.unshift(arrays.f4.indexOf(inNum));
            break;
        case 5:
            // Agrega el elemento en la posición 0 de fuerzas a F5 
            fuerzas.unshift(arrays.f5.indexOf(inNum));
            break;

        case 6:
            // Agrega el elemento en la posición 0 de fuerzas a F6 
            fuerzas.unshift(arrays.f6.indexOf(inNum));
            break;

        case 7:
            // Agrega el elemento en la posición 0 de fuerzas a F7 
            fuerzas.unshift(arrays.f7.indexOf(inNum));
            break;

        case 8:
            // Agrega el elemento en la posición 0 de fuerzas a F8 
            fuerzas.unshift(arrays.f8.indexOf(inNum));
            break;

        case 9:
            // Agrega el elemento en la posición 0 de fuerzas a F9 
            fuerzas.unshift(arrays.f9.indexOf(inNum));
            break;

        case 10:
            // Agrega el elemento en la posición 0 de fuerzas a F10 
            fuerzas.unshift(arrays.f10.indexOf(inNum));
            break;

        case 11:
            // Agrega el elemento en la posición 0 de fuerzas a F11 
            fuerzas.unshift(arrays.f11.indexOf(inNum));
            break;

        case 12:
            // Agrega el elemento en la posición 0 de fuerzas a F12 
            fuerzas.unshift(arrays.f12.indexOf(inNum));
            break;

        case 13:
            // Agrega el elemento en la posición 0 de fuerzas a F13 
            fuerzas.unshift(arrays.f13.indexOf(inNum));
            break;

        case 14:
            // Agrega el elemento en la posición 0 de fuerzas a F14 
            fuerzas.unshift(arrays.f14.indexOf(inNum));
            break;

        case 15:
            // Agrega el elemento en la posición 0 de fuerzas a F15 
            fuerzas.unshift(arrays.f15.indexOf(inNum));
            break;

        case 16:
            // Agrega el elemento en la posición 0 de fuerzas a F16 
            fuerzas.unshift(arrays.f16.indexOf(inNum));
            break;

        case 17:
            // Agrega el elemento en la posición 0 de fuerzas a F17 
            fuerzas.unshift(arrays.f17.indexOf(inNum));
            break;

        case 18:
            // Agrega el elemento en la posición 0 de fuerzas a F18 
            fuerzas.unshift(arrays.f18.indexOf(inNum));
            break;
        case 19:
            // Agrega el elemento en la posición 0 de fuerzas a F19 
            fuerzas.unshift(arrays.f19.indexOf(inNum));
            break;

        case 20:
            // Agrega el elemento en la posición 0 de fuerzas a F20 
            fuerzas.unshift(arrays.f20.indexOf(inNum));
            break;

        case 21:
            // Agrega el elemento en la posición 0 de fuerzas a F21 
            fuerzas.unshift(arrays.f21.indexOf(inNum));
            break;
        case 22:
            // Agrega el elemento en la posición 0 de fuerzas a F22 
            fuerzas.unshift(arrays.f22.indexOf(inNum));
            break;

        case 23:
            // Agrega el elemento en la posición 0 de fuerzas a F23 
            fuerzas.unshift(arrays.f23.indexOf(inNum));
            break;
        case 24:
            // Agrega el elemento en la posición 0 de fuerzas a F24 
            fuerzas.unshift(arrays.f24.indexOf(inNum));
            break;

        case 25:
            // Agrega el elemento en la posición 0 de fuerzas a F25 
            fuerzas.unshift(arrays.f25.indexOf(inNum));
            break;

        case 26:
            // Agrega el elemento en la posición 0 de fuerzas a F26 
            fuerzas.unshift(arrays.f26.indexOf(inNum));
            break;

        case 27:
            // Agrega el elemento en la posición 0 de fuerzas a F27 
            fuerzas.unshift(arrays.f27.indexOf(inNum));
            break;
        case 28:
            // Agrega el elemento en la posición 0 de fuerzas a F28 
            fuerzas.unshift(arrays.f28.indexOf(inNum));
            break;

        case 29:
            // Agrega el elemento en la posición 0 de fuerzas a F29 
            fuerzas.unshift(arrays.f29.indexOf(inNum));
            break;

        case 30:
            // Agrega el elemento en la posición 0 de fuerzas a F30 
            fuerzas.unshift(arrays.f30.indexOf(inNum));
            break;

        case 31:
            // Agrega el elemento en la posición 0 de fuerzas a F31 
            fuerzas.unshift(arrays.f31.indexOf(inNum));
            break;

        case 32:
            // Agrega el elemento en la posición 0 de fuerzas a F32 
            fuerzas.unshift(arrays.f32.indexOf(inNum));
            break;

        case 33:
            // Agrega el elemento en la posición 0 de fuerzas a F33 
            fuerzas.unshift(arrays.f33.indexOf(inNum));
            break;

        case 34:
            // Agrega el elemento en la posición 0 de fuerzas a F34 
            fuerzas.unshift(arrays.f34.indexOf(inNum));
            break;

        case 35:
            // Agrega el elemento en la posición 0 de fuerzas a F35 
            fuerzas.unshift(arrays.f35.indexOf(inNum));
            break;

        case 36:
            // Agrega el elemento en la posición 0 de fuerzas a F36 
            fuerzas.unshift(arrays.f36.indexOf(inNum));
            break;

        case 37:
            // Agrega el elemento en la posición 0 de fuerzas a F37 
            fuerzas.unshift(arrays.f37.indexOf(inNum));

            break;

        default:
            alert("Número guía no reconocido");
            return;
    }

    // Actualiza el número guía con el valor ingresado
    numGuia = inNum;

    // Muestra los resultados en el textarea
    // document.getElementById("resultTextArea").value = resultados.join("\n");


    if (resultados.length < cantidadDatos) {
        // Si aún quedan consultas, limpia la caja de número y continúa
        numInput.value = "";
    } else {
        // Si se alcanza el número deseado de iteraciones, cierra el programa
        alert("Programa finalizado.");
    }
    fuerzasReales();
    // Limpiar el contenido de la caja de texto después de procesar la información
    numInput.value = "";



}


