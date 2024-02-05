
// Primero, define la función mostrarArrayEnDOM
function mostrarArrayEnDOM(array, elementId) {
    var arrayResultDiv = document.getElementById(elementId);
    arrayResultDiv.innerHTML = elementId + ' = [' + array.join('|') + ']';
    console.log('mostrarArrayEnDOM() llamada para ' + elementId);
    console.log(arrayResultDiv);


}


// Define la función mostrarArrayEnDOM con un parámetro adicional para el nombre del array
function mostrarArrayEnDOM1(array, elementId, arrayName) {
    var arrayResultDiv = document.getElementById(elementId);
    arrayResultDiv.innerHTML = 'Probabilidad  ' + arrayName + ' = [' + array.join('-') + ']';
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
    var mensaje = "RT " + nombreArray + ": [" + array.join(" - ") + "]";

    // Muestra el mensaje en el DOM
    registroDiv.innerHTML = mensaje;

    // Imprime en consola el contenido actualizado del array
    console.log(mensaje);
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
        // Agregar el contenido de predicciones al inicio de probabilidad sin borrar el contenido actual
        probabilidad = [...predicciones, ...probabilidad];
        console.log("probabilidad???", probabilidad);
        mostrarArrayEnDOM(probabilidad, "histpre");

        // Imprimir el tamaño y contenido del array probabilidad
        console.log("Tamaño de probabilidad después de agregar predicciones", probabilidad.length);
        console.log("Contenido de probabilidad después de agregar predicciones", probabilidad);

        // Mostrar el array original en consola
        console.log("Array " + arrayName + ":", arrays[arrayName]);

        // Mostrar los valores extraídos en consola
        console.log("Predicciones " + PrediccionNum + ":", predicciones);
    } else {
        console.error("El array no existe.");
    }
    mostrarArrayEnDOM1(predicciones, "PROBABILIDAD", arrayName);
    
    // Retornar la variable 'predicciones' si es necesario utilizarla fuera de la función
    return predicciones;
}


// Variable global para almacenar el historial de aciertos
function perfectHit() {
    let fuerza = fuerzas[1];
    console.log("history:", history, "probabilidad:", probabilidad);

    if (history.length > 0 && probabilidad.length > 0) {
       
        if (history[0] === probabilidad[1]) {
            alert("Acierto real en el ingreso: " + contEvent + "  En el número " + history[0]);
            console.log("Acierto antes de cargar un nuevo elemento ", historialAciertos);

            historialAciertos.unshift(["Registro ", contEvent, "  Fuerza ", fuerza]);
            console.log("Historial de aciertos: ", historialAciertos);
            mostrarArrayEnDOM(historialAciertos, "Acierto");
        }
    }
}






