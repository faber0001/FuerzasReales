
var cantidadDatos;
var numGuia;
let PrediccionNum ;
var resultados = [];
var fuerzas = [];
let registerF = [];
var numeroint;
let contEvent=0;
// Objeto para asociar los arrays a cada caso
var registros = {};

let registerF0=[],registerF1=[],registerF2=[],registerF3=[],registerF4=[],registerF5=[],registerF6=[],registerF7=[],registerF8=[],registerF9=[],registerF10=[],registerF11=[],registerF12=[],registerF13=[],registerF14=[],registerF15=[],registerF16=[],registerF17=[],registerF18=[],registerF19=[],registerF20=[],registerF21=[],registerF22=[],registerF23=[],registerF24=[],registerF25=[],registerF26=[],registerF27=[],registerF28=[],registerF29=[],registerF30=[],registerF31=[],registerF32=[],registerF33=[],registerF34=[],registerF35=[],registerF36=[],registerF37=[];


let F0 = [],F1 = [],F2 = [],F3 = [],F4 = [],F5 = [],F6 = [],F7 = [],F8 = [],F9 = [],F10 = [],F11 = [],F12 = [],F13 = [],F14 = [],F15 = [],F16 = [],F17 = [],F18 = [],F19 = [],F20 = [],F21 = [],F22 = [],F23 = [],F24 = [],F25 = [],F26 = [],F27 = [],F28 = [],F29 = [],F30 = [],F31 = [],F32 = [],F33 = [],F34 = [],F35 = [],F36 = [],F37 = [];
// Ejemplo de arrays para cada caso
let arrays = {
 f0 : [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2],

 f1 : [1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5 , 22, 34, 15, 3, 24, 36, 13],

 f2 :[ 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14],
   
 f3 : [ 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15],

 f4 : [ 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12,  8, 19, 31, 18, 6, 21, 33, 16 ],

 f5 : [ 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17],
 
 f6 : [ 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18 ],
    
 f7 : [ 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11 ],
   
 f8 : [ 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12 ],
   
 f9 : [ 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28 ],

 f10 : [ 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27 ],

 f11 : [ 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30 ],
   
 f12 : [ 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29 ],
    
 f13 : [ 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36 ],
   
 f14 : [ 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35 ],
   
 f15 : [  15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34 ],

 f16 : [ 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33 ],

 f17 : [ 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32 ],
   
 f18 : [ 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31 ],
    
f19 : [ 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8 ],
   
 f20 : [ 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7 ],
   
 f21 : [ 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6 ],

 f22 : [ 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5 ],

 f23 : [ 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4 ],
   
 f24 : [ 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3 ],
    
 f25 : [ 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10 ],
   
 f26 : [ 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9 ],
   
 f27 : [ 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37 ],

 f28 : [ 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0 ],

 f29 : [ 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25 ],

 f30 : [ 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26 ],
    
 f31 : [  31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19 ],
   
 f32 : [ 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20 ],
   
 f33 : [ 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21 ],

 f34 : [ 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22 ],

 f35 : [ 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23 ],
   
 f36 : [ 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24 ],
    
 f37 : [ 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1 ],
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
        document.getElementById("resultados").style.display = "block";
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
    PrediccionNum=inNum;
    

      
    resultados.push(`Número Guía: ${numGuia}, Número Consultado: ${inNum}`);

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
     registerF1.unshift(contEvent);
     mostrarArrayEnDOM1(registerF1, "registerF", registerF1);

    break;
        
case 2:
    // Agrega el elemento en la posición 0 de fuerzas a F2 
     fuerzas.unshift(arrays.f2.indexOf(inNum));
     // Ejemplo de llamada a la función para mostrar el array del caso 0
     mostrarRegistroEnDOM(2);
     break;

case 3:
     // Agrega el elemento en la posición 0 de fuerzas a F3 
     fuerzas.unshift(arrays.f3.indexOf(inNum));
     // Ejemplo de llamada a la función para mostrar el array del caso 0
     mostrarRegistroEnDOM(3);
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
    document.getElementById("resultTextArea").value = resultados.join("\n");
   

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










function fuerzasReales(){
var positionUno=fuerzas[1];
var positionCero=fuerzas[0];





switch(positionUno){


       
    case 0:
            // Llenamos registerF0 con el contador para marcar el tiempo 
             registerF0.unshift(contEvent);
          
             console.log("registroFuerza0",registerF0);
            mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) {
            F0.unshift(positionCero);

            mostrarArrayEnDOM(F0, 'fuerzasResultF0');
            // Ejemplo de uso con PrediccionNum = 1
            console.log("NUmero de entrada Fuerzareales   "+PrediccionNum);
            mostrarArrayConIndice(PrediccionNum, F0);
            
        } 

        break;

    case 1:
            mostrarArrayEnDOM(fuerzas, 'fuerzas'); 
        if (fuerzas.length > 1) {
            F1.unshift(positionCero);
            mostrarArrayEnDOM(F1, 'fuerzasResultF1');
            mostrarArrayConIndice(PrediccionNum, F1);
            console.log("Fuerzas", fuerzas);
            console.log("F1", F1);
        }
          
        break;


 case 2:
               //  mostrarFuerzas();
               mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {
              F2.unshift(positionCero);
              mostrarArrayEnDOM(F2, 'fuerzasResultF2');
              mostrarArrayConIndice(PrediccionNum, F2);
              console.log("Fuerzas", fuerzas);
              console.log("F2", F2);
        }
              

              break;

 case 3:    
              //  mostrarFuerzas();
              mostrarArrayEnDOM(fuerzas, 'fuerzas');
          if (fuerzas.length > 1) {

              F3.unshift(positionCero);
              mostrarArrayEnDOM(F3, 'fuerzasResultF3');
              mostrarArrayConIndice(PrediccionNum, F3);
              console.log("Fuerzas", fuerzas);
              console.log("F3", F3);
       }
             

             break;

case 4: 
            //  mostrarFuerzas();
             mostrarArrayEnDOM(fuerzas, 'fuerzas');
         if (fuerzas.length > 1) {
              F4.unshift(positionCero);
              mostrarArrayEnDOM(F4, 'fuerzasResultF4');
              mostrarArrayConIndice(PrediccionNum, F4);
              console.log("Fuerzas", fuerzas);
              console.log("F4", F4);
       }
               

               break;

case 5:
            mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) {
            F5.unshift(positionCero);
            mostrarArrayEnDOM(F5, 'fuerzasResultF5');
            mostrarArrayConIndice(PrediccionNum, F5);
            console.log("Fuerzas", fuerzas);
            console.log("F5", F5);
       }
            

            break;
case 6:
           mostrarArrayEnDOM(fuerzas, 'fuerzas');
       if (fuerzas.length > 1) {
           F6.unshift(positionCero);
           mostrarArrayEnDOM(F6, 'fuerzasResultF6');
           mostrarArrayConIndice(PrediccionNum, F6);
           console.log("Fuerzas", fuerzas);
           console.log("F6", F6);
       }
           

           break;

 case 7:
           mostrarArrayEnDOM(fuerzas, 'fuerzas');
       if (fuerzas.length > 1) {
           F7.unshift(positionCero);
           mostrarArrayEnDOM(F7, 'fuerzasResultF7');
           mostrarArrayConIndice(PrediccionNum, F7);
           console.log("Fuerzas", fuerzas);
           console.log("F7", F7);
        }
           

           break;

case 8:
            mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) {
           F8.unshift(positionCero);
           mostrarArrayEnDOM(F8, 'fuerzasResultF8');
           mostrarArrayConIndice(PrediccionNum, F8);
           console.log("Fuerzas", fuerzas);
           console.log("F8", F8);
       }
           

           break;

case 9:
            mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) {
            F9.unshift(positionCero);
            mostrarArrayEnDOM(F9, 'fuerzasResultF9');
            mostrarArrayConIndice(PrediccionNum, F9);
            console.log("Fuerzas", fuerzas);
            console.log("F9", F9);
       }

            
            break;

case 10:
            mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) {
            F10.unshift(positionCero);
            mostrarArrayEnDOM(F10, 'fuerzasResultF10');
            mostrarArrayConIndice(PrediccionNum, F10);
            console.log("Fuerzas", fuerzas);
            console.log("F10", F10);
        }
            

            break;

case 11:
            mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) { 
            F11.unshift(positionCero);
            mostrarArrayEnDOM(F11, 'fuerzasResultF11');
            mostrarArrayConIndice(PrediccionNum, F11);
            console.log("Fuerzas", fuerzas);
            console.log("F11", F11);
        }
            

            break;

case 12:
            mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) {
            F12.unshift(positionCero);
            mostrarArrayEnDOM(F12, 'fuerzasResultF12');
            mostrarArrayConIndice(PrediccionNum, F12);
            console.log("Fuerzas", fuerzas);
            console.log("F12", F12);
        }
            

            break;

case 13:
            mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) {

            F13.unshift(positionCero);
            mostrarArrayEnDOM(F13, 'fuerzasResultF13');
            mostrarArrayConIndice(PrediccionNum, F13);
            console.log("Fuerzas", fuerzas);
            console.log("F13", F13);
        }
            

            break;

case 14:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) {

            F14.unshift(positionCero);
            mostrarArrayEnDOM(F14, 'fuerzasResultF14');
            mostrarArrayConIndice(PrediccionNum, F14);
            console.log("Fuerzas", fuerzas);
            console.log("F14", F14);
        }
            

            break;

case 15:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
        if (fuerzas.length > 1) {

            F15.unshift(positionCero);
            mostrarArrayEnDOM(F15, 'fuerzasResultF15');
            mostrarArrayConIndice(PrediccionNum, F15);
            console.log("Fuerzas", fuerzas);
            console.log("F15", F15);
        }
            

            break;

case 16:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
         if (fuerzas.length > 1) {

             F16.unshift(positionCero);
             mostrarArrayEnDOM(F16, 'fuerzasResultF16');
             mostrarArrayConIndice(PrediccionNum, F16);
             console.log("Fuerzas", fuerzas);
             console.log("F16", F16);
         }
          

             break;

case 17: 
mostrarArrayEnDOM(fuerzas, 'fuerzas');
         if (fuerzas.length > 1) {

             F17.unshift(positionCero);
             mostrarArrayEnDOM(F17, 'fuerzasResultF17');
             mostrarArrayConIndice(PrediccionNum, F17);
              console.log("Fuerzas", fuerzas);
              console.log("F17", F17);
         }
        

         break;

 case 18:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
            if (fuerzas.length > 1) {
                F18.unshift(positionCero);
                mostrarArrayEnDOM(F18, 'fuerzasResultF18');
                mostrarArrayConIndice(PrediccionNum, F18);
                console.log("Fuerzas", fuerzas);
                console.log("F18", F18);
            }
        
            break;


            

 case 19:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
            if (fuerzas.length > 1) {
                F19.unshift(positionCero);
                mostrarArrayEnDOM(F19, 'fuerzasResultF19');
                mostrarArrayConIndice(PrediccionNum, F19);
                console.log("Fuerzas", fuerzas);
                console.log("F19", F19);
            }
          
            break;

case 20:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
          if (fuerzas.length > 1) {
              F20.unshift(positionCero);
              mostrarArrayEnDOM(F20, 'fuerzasResultF20');
              mostrarArrayConIndice(PrediccionNum, F20);
              console.log("Fuerzas", fuerzas);
              console.log("F20", F20);
          }
       

              break;
  

case 21:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
          if (fuerzas.length > 1) {

              F21.unshift(positionCero);
              mostrarArrayEnDOM(F21, 'fuerzasResultF21');
              mostrarArrayConIndice(PrediccionNum, F21);
              console.log("Fuerzas", fuerzas);
              console.log("F21", F21);
           }
            

              break;

case 22:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
          if (fuerzas.length > 1) {

              F22.unshift(positionCero);
              mostrarArrayEnDOM(F22, 'fuerzasResultF22');
              mostrarArrayConIndice(PrediccionNum, F22);
              console.log("Fuerzas", fuerzas);
              console.log("F22", F22);
          }
           

              break;

case 23:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
          if (fuerzas.length > 1) {

              F23.unshift(positionCero);
              mostrarArrayEnDOM(F23, 'fuerzasResultF23');
              mostrarArrayConIndice(PrediccionNum, F23);
              console.log("Fuerzas", fuerzas);
              console.log("F23", F23);
          }
            

              break;

case 24:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {

               F24.unshift(positionCero);
               mostrarArrayEnDOM(F24, 'fuerzasResultF24');
               mostrarArrayConIndice(PrediccionNum, F24);
               console.log("Fuerzas", fuerzas);
               console.log("F24", F24);
            }
              

               break;

case 25:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {
               F25.unshift(positionCero);
               mostrarArrayEnDOM(F25, 'fuerzasResultF25');
               mostrarArrayConIndice(PrediccionNum, F25);
               console.log("Fuerzas", fuerzas);
               console.log("F25", F25);
            }
            

               break;

case 26:
               mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {
               F26.unshift(positionCero);
               mostrarArrayEnDOM(F26, 'fuerzasResultF26');
               mostrarArrayConIndice(PrediccionNum, F26);
               console.log("Fuerzas", fuerzas);
               console.log("F26", F26);
            }

      

               break;

case 27:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {
               F27.unshift(positionCero);
               mostrarArrayEnDOM(F27, 'fuerzasResultF27');
               mostrarArrayConIndice(PrediccionNum, F27);
               console.log("Fuerzas", fuerzas);
               console.log("F27", F27);
            }


               break;

case 28:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {
               F28.unshift(positionCero);
               mostrarArrayEnDOM(F28, 'fuerzasResultF28');
               mostrarArrayConIndice(PrediccionNum, F28);
               console.log("Fuerzas", fuerzas);
               console.log("F28", F28);
           }
             

               break;

case 29:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {

               F29.unshift(positionCero);
               mostrarArrayEnDOM(F29, 'fuerzasResultF29');
               mostrarArrayConIndice(PrediccionNum, F29);
               console.log("Fuerzas", fuerzas);
               console.log("F29", F29);
            }
               

               break;

case 30:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {
               F30.unshift(positionCero);
               mostrarArrayEnDOM(F30, 'fuerzasResultF30');
               mostrarArrayConIndice(PrediccionNum, F30);
               console.log("Fuerzas", fuerzas);
               console.log("F30", F30);
           }
              

               break;

case 31:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {
               F31.unshift(positionCero);
               mostrarArrayEnDOM(F31, 'fuerzasResultF31');
               mostrarArrayConIndice(PrediccionNum, F31);
               console.log("Fuerzas", fuerzas);
               console.log("F31", F31);
            }
        

               break;

case 32:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
           if (fuerzas.length > 1) {
               F32.unshift(positionCero);
               mostrarArrayEnDOM(F32, 'fuerzasResultF32');
               mostrarArrayConIndice(PrediccionNum, F32);
               console.log("Fuerzas", fuerzas);
               console.log("F32", F32);
            }
             

               break;

case 33:
    mostrarArrayEnDOM(fuerzas, 'fuerzas');
            if (fuerzas.length > 1) {
                F33.unshift(positionCero);
                mostrarArrayEnDOM(F33, 'fuerzasResultF33');
                mostrarArrayConIndice(PrediccionNum, F33);
                console.log("Fuerzas", fuerzas);
                console.log("F33", F33);
            }
             

                break;

case 34:
                mostrarArrayEnDOM(fuerzas, 'fuerzas');
            if (fuerzas.length > 1) {
                F34.unshift(positionCero);
                mostrarArrayEnDOM(F34, 'fuerzasResultF34');
                mostrarArrayConIndice(PrediccionNum, F34);
                console.log("Fuerzas", fuerzas);
                console.log("F34", F34);
             }
 

                break;

case 35:
                 mostrarArrayEnDOM(fuerzas, 'fuerzas');
             if (fuerzas.length > 1) {
                 F35.unshift(positionCero);
                 mostrarArrayEnDOM(F35, 'fuerzasResultF35');
                 mostrarArrayConIndice(PrediccionNum, F35);
                 console.log("Fuerzas", fuerzas);
                 console.log("F35", F35);
              }
                 

                 break;

case 36:
                 
                 mostrarArrayEnDOM(fuerzas, 'fuerzas');
             if (fuerzas.length > 1) {
                 F36.unshift(positionCero);
                 mostrarArrayEnDOM(F36, 'fuerzasResultF36');
                 mostrarArrayConIndice(PrediccionNum, F36);
                 console.log("Fuerzas", fuerzas);
                 console.log("F36", F36);
              }
                


                 break;

case 37:
                 mostrarArrayEnDOM(fuerzas, 'fuerzas');
             if (fuerzas.length > 1) {
                 F37.unshift(positionCero);
                 mostrarArrayEnDOM(F37, 'fuerzasResultF37');
                 mostrarArrayConIndice(PrediccionNum, F37);
                 console.log("Fuerzas", fuerzas);
                 console.log("F37", F37);
             }
                 

                 break;

               default:

               alert("Número guía no reconocido");
       
}
}


             
    
