
// Primero, define la función mostrarArrayEnDOM
function mostrarArrayEnDOM(array, elementId) {
    var arrayResultDiv = document.getElementById(elementId);
    arrayResultDiv.innerHTML = elementId + ' = [' + array.join(' || ') + ']';
    console.log('mostrarArrayEnDOM() llamada para ' + elementId);
    console.log(arrayResultDiv);


}

  // Define la función mostrarArrayEnDOM con un parámetro adicional para el nombre del array
function mostrarArrayEnDOM1(array, elementId, arrayName) {
    var arrayResultDiv = document.getElementById(elementId);
    arrayResultDiv.innerHTML = 'Probabilidad  '+arrayName + ' = [' + array.join('-') + ']';
    console.log('mostrarArrayEnDOM() llamada para ' + elementId + ', array: ' + arrayName);
    console.log(arrayResultDiv);
}

function incrementarContadorYMostrarEnDOM() {
    // Incrementa el contador
    contEvent++;

    // Obtén el elemento DOM con el id "Eventos" y actualiza su contenido
    document.getElementById("Eventos").innerHTML = " Ingresos: " + contEvent;
}


// Función para mostrar un array en el DOM
function mostrarArraysF(array, nombreArray) {
    // Obtén el elemento DOM con el id "registerF"
    var registroDiv = document.getElementById("registerF");

    // Construye el mensaje a mostrar en el DOM
    var mensaje = "Time " + nombreArray + ": [" + array.join(" - ") + "]";

    // Muestra el mensaje en el DOM
    registroDiv.innerHTML = mensaje;

    // Imprime en consola el contenido actualizado del array
    console.log(mensaje);
}
//
// Función para mostrar un array histpre en el DOM
function mostrarHistoryPre(PrediccionNum,array) {
    // Construir el nombre del array
    let arrayName = "f" + PrediccionNum;

    // Variable para almacenar los valores extraídos
    let predicciones = [];

    // Verificar si el array existe en el objeto 'arrays'
    if (arrays[arrayName] !== undefined) {
        // Iterar sobre las posiciones en F
        for (let i = 0; i < array.length; i++) {
            // Obtener el valor en la posición correspondiente de 'arrays[arrayName]'
            let posicion = array[i];
            let valor = arrays[arrayName][posicion];

            // Agregar el valor a la variable 'predicciones'
            predicciones.unshift(valor);

        } 
      
        } 
          else {
            console.error("El array no existe.");
            
    } mostrarArrayEnDOM(predicciones, "prehist");
      return predicciones;
}






// Función para mostrar un array con un índice dado
function mostrarArrayConIndice(PrediccionNum, F) {
    // Construir el nombre del array
    let arrayName = "f" + PrediccionNum;

    // Variable para almacenar los valores extraídos
    let predicciones = [];

    // Verificar si el array existe en el objeto 'arrays'
    if (arrays[arrayName] !== undefined) {
        // Iterar sobre las posiciones en F
        for (let i = 0; i < F.length; i++) {
            // Obtener el valor en la posición correspondiente de 'arrays[arrayName]'
            let posicion = F[i];
            let valor = arrays[arrayName][posicion];

            // Agregar el valor a la variable 'predicciones'
            predicciones.push(valor);
        }

        // Mostrar el array original en consola
        console.log("Array " + arrayName + ":", arrays[arrayName]);

        // Mostrar los valores extraídos en consola
        console.log("Predicciones " + PrediccionNum + ":", predicciones);
    } else {
        console.error("El array no existe.");
    }
    mostrarArrayEnDOM1(predicciones, "PROBABILIDAD",arrayName);
    // Retornar la variable 'predicciones' si es necesario utilizarla fuera de la función
    return predicciones;
}
























