
var cantidadDatos;
var numGuia;
var resultados = [];
var fuerzas = [];
let F0 = [],F1 = [],F2 = [],F3 = [],F4 = [],F5 = [],F6 = [],F7 = [],F8 = [],F9 = [],F10 = [],F11 = [],F12 = [],F13 = [],F14 = [],F15 = [],F16 = [],F17 = [],F18 = [],F19 = [],F20 = [],F21 = [],F22 = [],F23 = [],F24 = [],F25 = [],F26 = [],F27 = [],F28 = [],F29 = [],F30 = [],F31 = [],F32 = [],F33 = [],F34 = [],F35 = [],F36 = [],F37 = [];
// Ejemplo de arrays para cada caso
let f0 = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2];

let f1 = [1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 22, 34, 15, 3, 24, 36, 13];

let f2 = [ 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14];
   
    let f3 = [ 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15];

    let f4 = [ 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12,  8, 19, 31, 18, 6, 21, 33, 16 ];

    let f5 = [ 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17];
 
    let f6 = [ 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18 ];
    
    let f7 = [ 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11 ];
   
    let f8 = [ 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12 ];
   
    let f9 = [ 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28 ];

    let f10 = [ 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27 ];

    let f11 = [ 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30 ];
   
    let f12 = [ 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29 ];
    
    let f13 = [ 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36 ];
   
    let f14 = [ 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35 ];
   
    let f15 = [  15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34 ];

    let f16 = [ 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33 ];

    let f17 = [ 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32 ];
   
    let f18 = [ 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31 ];
    
    let f19 = [ 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8 ];
   
    let f20 = [ 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7 ];
   
    let f21 = [ 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6 ];

    let f22 = [ 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5 ];

    let f23 = [ 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4 ];
   
    let f24 = [ 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3 ];
    
    let f25 = [ 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10 ];
   
    let f26 = [ 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9 ];
   
    let f27 = [ 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37 ];

    let f28 = [ 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0 ];

    let f29 = [ 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25 ];

    let f30 = [ 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26 ];
    
    let f31 = [  31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19 ];
   
    let f32 = [ 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20 ];
   
    let f33 = [ 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21 ];

    let f34 = [ 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22 ];

    let f35 = [ 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23 ];
   
    let f36 = [ 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24 ];
    
    let f37 = [ 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1 ];

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

    resultados.push(`Número Guía: ${numGuia}, Número Consultado: ${inNum}`);

    // Utiliza el valor de numGuia para realizar acciones según el caso
    switch (numGuia) {
        case 0:
         // Agrega el elemento en la posición 0 de fuerzas a F0 
            fuerzas.unshift(f0.indexOf(inNum));
            break;

        case 1:
         // Agrega el elemento en la posición 0 de fuerzas a F1 
            fuerzas.unshift(f1.indexOf(inNum));
            break;
        
        case 2:
            // Agrega el elemento en la posición 0 de fuerzas a F2 
            fuerzas.unshift(f2.indexOf(inNum));
            break;

        case 3:
            // Agrega el elemento en la posición 0 de fuerzas a F3 
            fuerzas.unshift(f3.indexOf(inNum));
            break;

        case 4:
            // Agrega el elemento en la posición 0 de fuerzas a F4 
            fuerzas.unshift(f4.indexOf(inNum));
            break;

        case 5:
            // Agrega el elemento en la posición 0 de fuerzas a F5 
            fuerzas.unshift(f5.indexOf(inNum));
            break;

case 6:
    // Agrega el elemento en la posición 0 de fuerzas a F6 
    fuerzas.unshift(f6.indexOf(inNum));
    break;

case 7:
    // Agrega el elemento en la posición 0 de fuerzas a F7 
    fuerzas.unshift(f7.indexOf(inNum));
    break;

case 8:
    // Agrega el elemento en la posición 0 de fuerzas a F8 
    fuerzas.unshift(f8.indexOf(inNum));
    break;

case 9:
    // Agrega el elemento en la posición 0 de fuerzas a F9 
    fuerzas.unshift(f9.indexOf(inNum));
    break;

case 10:
    // Agrega el elemento en la posición 0 de fuerzas a F10 
    fuerzas.unshift(f10.indexOf(inNum));
    break;

case 11:
    // Agrega el elemento en la posición 0 de fuerzas a F11 
    fuerzas.unshift(f11.indexOf(inNum));
    break;

case 12:
    // Agrega el elemento en la posición 0 de fuerzas a F12 
    fuerzas.unshift(f12.indexOf(inNum));
    break;

case 13:
    // Agrega el elemento en la posición 0 de fuerzas a F13 
    fuerzas.unshift(f13.indexOf(inNum));
    break;

case 14:
    // Agrega el elemento en la posición 0 de fuerzas a F14 
    fuerzas.unshift(f14.indexOf(inNum));
    break;

case 15:
    // Agrega el elemento en la posición 0 de fuerzas a F15 
    fuerzas.unshift(f15.indexOf(inNum));
    break;

case 16:
    // Agrega el elemento en la posición 0 de fuerzas a F16 
    fuerzas.unshift(f16.indexOf(inNum));
    break;

case 17:
    // Agrega el elemento en la posición 0 de fuerzas a F17 
    fuerzas.unshift(f17.indexOf(inNum));
    break;

case 18:
    // Agrega el elemento en la posición 0 de fuerzas a F18 
    fuerzas.unshift(f18.indexOf(inNum));
    break;
case 19:
    // Agrega el elemento en la posición 0 de fuerzas a F19 
    fuerzas.unshift(f19.indexOf(inNum));
    break;

case 20:
    // Agrega el elemento en la posición 0 de fuerzas a F20 
    fuerzas.unshift(f20.indexOf(inNum));
    break;

case 21:
    // Agrega el elemento en la posición 0 de fuerzas a F21 
    fuerzas.unshift(f21.indexOf(inNum));
    break;
case 22:
    // Agrega el elemento en la posición 0 de fuerzas a F22 
    fuerzas.unshift(f22.indexOf(inNum));
    break;

case 23:
    // Agrega el elemento en la posición 0 de fuerzas a F23 
    fuerzas.unshift(f23.indexOf(inNum));
    break;
case 24:
    // Agrega el elemento en la posición 0 de fuerzas a F24 
    fuerzas.unshift(f24.indexOf(inNum));
    break;

case 25:
    // Agrega el elemento en la posición 0 de fuerzas a F25 
    fuerzas.unshift(f25.indexOf(inNum));
    break;

case 26:
    // Agrega el elemento en la posición 0 de fuerzas a F26 
    fuerzas.unshift(f26.indexOf(inNum));
    break;

case 27:
    // Agrega el elemento en la posición 0 de fuerzas a F27 
    fuerzas.unshift(f27.indexOf(inNum));
    break;
case 28:
    // Agrega el elemento en la posición 0 de fuerzas a F28 
    fuerzas.unshift(f28.indexOf(inNum));
    break;

case 29:
    // Agrega el elemento en la posición 0 de fuerzas a F29 
    fuerzas.unshift(f29.indexOf(inNum));
    break;

case 30:
    // Agrega el elemento en la posición 0 de fuerzas a F30 
    fuerzas.unshift(f30.indexOf(inNum));
    break;

case 31:
    // Agrega el elemento en la posición 0 de fuerzas a F31 
    fuerzas.unshift(f31.indexOf(inNum));
    break;

case 32:
    // Agrega el elemento en la posición 0 de fuerzas a F32 
    fuerzas.unshift(f32.indexOf(inNum));
    break;

case 33:
    // Agrega el elemento en la posición 0 de fuerzas a F33 
    fuerzas.unshift(f33.indexOf(inNum));
    break;

case 34:
    // Agrega el elemento en la posición 0 de fuerzas a F34 
    fuerzas.unshift(f34.indexOf(inNum));
    break;

case 35:
    // Agrega el elemento en la posición 0 de fuerzas a F35 
    fuerzas.unshift(f35.indexOf(inNum));
    break;

case 36:
    // Agrega el elemento en la posición 0 de fuerzas a F36 
    fuerzas.unshift(f36.indexOf(inNum));
    break;

case 37:
    // Agrega el elemento en la posición 0 de fuerzas a F37 
    fuerzas.unshift(f37.indexOf(inNum));
  
    break;

        default:
            alert("Número guía no reconocido");
            return;
    }

    // Actualiza el número guía con el valor ingresado
    numGuia = inNum;

    // Muestra los resultados en el textarea
    document.getElementById("resultTextArea").value = resultados.join("\n");

    // Muestra el array fuerzas en tiempo real
   // mostrarFuerzas();

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
         if (fuerzas.length > 1) {
              F0.unshift(positionCero);
            // Llama a las funciones para mostrar los arrays en el DOM
              mostrarFuerzasArray();
              mostrarF0();
              console.log("Fuerzas", fuerzas);
              console.log("F0",F0);
       }
              alert("Caso 0");
              break;
   case 1:
           if (fuerzas.length > 1) {
              F1.unshift(positionCero);
              mostrarFuerzasArray();
              console.log("Fuerzas", fuerzas);
              console.log("F1",F1);
       }  
              alert("Caso 1");
              break;
          // Agrega más casos según sea necesario
 case 2:
           if (fuerzas.length > 1) {
              F2.unshift(positionCero);
           //  mostrarFuerzas();
              mostrarFuerzasArray();
              console.log("Fuerzas", fuerzas);
              console.log("F2", F2);
        }
           alert("Caso 2");
           break;

 case 3:
         if (fuerzas.length > 1) {
            F3.unshift(positionCero);
          //  mostrarFuerzas();
            mostrarFuerzasArray();
            console.log("Fuerzas", fuerzas);
            console.log("F3", F3);
       }
       alert("Caso 3");
       break;

   case 4:
           if (fuerzas.length > 1) {
           F4.unshift(positionCero);
         //  mostrarFuerzas();
           mostrarFuerzasArray();
           console.log("Fuerzas", fuerzas);
           console.log("F4", F4);
       }
       alert("Caso 4");
       break;

case 5:
        if (fuerzas.length > 1) {
           F5.unshift(positionCero);
           mostrarFuerzasArray();
          // mostrarFuerzas();
           console.log("Fuerzas", fuerzas);
           console.log("F5", F5);
       }
       alert("Caso 5");
       break;
case 6:
       if (fuerzas.length > 1) {
          F6.unshift(positionCero);
          mostrarFuerzasArray();
        //  mostrarFuerzas();
          console.log("Fuerzas", fuerzas);
          console.log("F6", F6);
       }
       alert("Caso 6");
       break;

 case 7:
       if (fuerzas.length > 1) {
           F7.unshift(positionCero);
           mostrarFuerzasArray();
         //  mostrarFuerzas();
           console.log("Fuerzas", fuerzas);
           console.log("F7", F7);
       }
       alert("Caso 7");
       break;

case 8:
if (fuerzas.length > 1) {
   F8.unshift(positionCero);
   mostrarFuerzasArray();
 //  mostrarFuerzas();
   console.log("Fuerzas", fuerzas);
   console.log("F8", F8);
}
alert("Caso 8");
break;

case 9:
if (fuerzas.length > 1) {
   F9.unshift(positionCero);
  // mostrarFuerzas();
   mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F9", F9);
}
alert("Caso 9");
break;

case 10:
if (fuerzas.length > 1) {
   F10.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F10", F10);
}
alert("Caso 10");
break;

case 11:
if (fuerzas.length > 1) {
   F11.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F11", F11);
}
alert("Caso 11");
break;

case 12:
if (fuerzas.length > 1) {
   F12.unshift(positionCero);
 //  mostrarFuerzas();
   mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F12", F12);
}
alert("Caso 12");
break;

case 13:
if (fuerzas.length > 1) {
   F13.unshift(positionCero);
 //  mostrarFuerzas();
 mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F13", F13);
}
alert("Caso 13");
break;

case 14:
if (fuerzas.length > 1) {
   F14.unshift(positionCero);
 //  mostrarFuerzas();
 mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F14", F14);
}
alert("Caso 14");
break;

case 15:
if (fuerzas.length > 1) {
   F15.unshift(positionCero);
 //  mostrarFuerzas();
 mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F15", F15);
}
alert("Caso 15");
break;

case 16:
if (fuerzas.length > 1) {
   F16.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F16", F16);
}
alert("Caso 16");
break;

case 17:
if (fuerzas.length > 1) {
   F17.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F17", F17);
}
alert("Caso 17");
break;

case 18:
if (fuerzas.length > 1) {
   F18.unshift(positionCero);
 //  mostrarFuerzas();
 mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F18", F18);
}
alert("Caso 18");
break;

case 19:
if (fuerzas.length > 1) {
   F19.unshift(positionCero);
 //  mostrarFuerzas();
 mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F19", F19);
}
alert("Caso 19");
break;

case 20:
if (fuerzas.length > 1) {
   F20.unshift(positionCero);
 //  mostrarFuerzas();
 mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F20", F20);
}
alert("Caso 20");
break;

case 21:
if (fuerzas.length > 1) {
   F21.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F21", F21);
}
alert("Caso 21");
break;

case 22:
if (fuerzas.length > 1) {
   F22.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F22", F22);
}
alert("Caso 22");
break;

case 23:
if (fuerzas.length > 1) {
   F23.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F23", F23);
}
alert("Caso 23");
break;

case 24:
if (fuerzas.length > 1) {
   F24.unshift(positionCero);
 //  mostrarFuerzas();
 mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F24", F24);
}
alert("Caso 24");
break;

case 25:
if (fuerzas.length > 1) {
   F25.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F25", F25);
}
alert("Caso 25");
break;

case 26:
if (fuerzas.length > 1) {
   F26.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F26", F26);
}
alert("Caso 26");
break;

case 27:
if (fuerzas.length > 1) {
   F27.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F27", F27);
}
alert("Caso 27");
break;

case 28:
if (fuerzas.length > 1) {
   F28.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F28", F28);
}
alert("Caso 28");
break;

case 29:
if (fuerzas.length > 1) {
   F29.unshift(positionCero);
   //mostrarFuerzas();
   mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F29", F29);
}
alert("Caso 29");
break;

case 30:
if (fuerzas.length > 1) {
   F30.unshift(positionCero);
 //  mostrarFuerzas();
 mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F30", F30);
}
alert("Caso 30");
break;

case 31:
if (fuerzas.length > 1) {
   F31.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F31", F31);
}
alert("Caso 31");
break;

case 32:
if (fuerzas.length > 1) {
   F32.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F32", F32);
}
alert("Caso 32");
break;

case 33:
if (fuerzas.length > 1) {
   F33.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F33", F33);
}
alert("Caso 33");
break;

case 34:
// Agrega el elemento en la posición 0 de fuerzas a F34 
fuerzas.unshift(f34.indexOf(inNum));
if (fuerzas.length > 1) {
   F34.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F34", F34);
}
alert("Caso 34");
break;

case 35:
if (fuerzas.length > 1) {
   F35.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F35", F35);
}
alert("Caso 35");
break;

case 36:
if (fuerzas.length > 1) {
   F36.unshift(positionCero);
  // mostrarFuerzas();
  mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F36", F36);
}
alert("Caso 36");
break;

case 37:
if (fuerzas.length > 1) {
   F37.unshift(positionCero);
 //  mostrarFuerzas();
 mostrarFuerzasArray();
   console.log("Fuerzas", fuerzas);
   console.log("F37", F37);
}
alert("Caso 37");
break;
   default:
       alert("Número guía no reconocido");
       
}
}



// Función para mostrar el array fuerzas en el DOM
function mostrarFuerzasArray() {
    // Verificar si el tamaño de fuerzas es mayor a 0
    if (fuerzas.length > 0) {
        // Obtener el div por su id
        var fuerzasDiv = document.getElementById('fuerzas');

        // Crear un elemento de texto para mostrar el contenido de fuerzas
        var textoFuerzas = document.createTextNode('Fuerzas = [' + fuerzas.join(', ') + ']');

        // Agregar el texto al div
        fuerzasDiv.appendChild(textoFuerzas);
    }
}

// Función para mostrar el array fuerzas en el DOM
function mostrarFuerzasArray() {
    // Obtener el div por su id
    var fuerzasDiv = document.getElementById('fuerzas');

    // Crear un elemento de texto para mostrar el contenido de fuerzas
    var textoFuerzas = document.createTextNode('Fuerzas = ' + JSON.stringify(fuerzas));

    // Limpiar el contenido actual del div antes de agregar el nuevo texto
    fuerzasDiv.innerHTML = '';

    // Agregar el texto al div
    fuerzasDiv.appendChild(textoFuerzas);
}
// Función para mostrar el array fuerzas en el DOM
function mostrarFuerzasArray() {
    // Obtener el div por su id
    var fuerzasDiv = document.getElementById('fuerzas');

    // Limpiar el contenido actual del div antes de agregar el nuevo texto
  //  fuerzasDiv.innerHTML = 'Fuerzas = ' + JSON.stringify(fuerzas);
    fuerzasDiv.innerHTML = 'Fuerzas = [' + fuerzas.join('-') + ']';

}

// Función para mostrar el array F0 en el DOM
function mostrarF0() {
    // Obtener el div por su id
    var fuerzasResultF0Div = document.getElementById('fuerzasResultF0');

    // Limpiar el contenido actual del div antes de agregar el nuevo texto
   // fuerzasResultF0Div.innerHTML = 'F0 = ' + JSON.stringify(F0);
    fuerzasResultF0Div.innerHTML = 'F0 = [' + F0.join('-') + ']';
}
