
// Primero, define la función mostrarArrayEnDOM
function mostrarArrayEnDOM(array, elementId) {
    var arrayResultDiv = document.getElementById(elementId);
    arrayResultDiv.innerHTML = elementId + ' = [' + array.join('-') + ']';
    console.log('mostrarArrayEnDOM() llamada para ' + elementId);
    console.log(arrayResultDiv);


}



// Función para mostrar un array con un índice dado
function mostrarArrayConIndice(PrediccionNum, F) {
    // Construir el nombre del array
    let arrayName = "f" + PrediccionNum;

    // Verificar si el array existe en el objeto 'arrays'
    if (arrays[arrayName] !== undefined) {
        // Array para almacenar los valores resultantes
        let Probabilidad = [];

        // Iterar sobre las posiciones en F
        for (let i = 0; i < F.length; i++) {
            // Obtener el valor en la posición correspondiente de f
            let valor = arrays[arrayName][F[i]];

            // Agregar el valor a Probabilidad
            Probabilidad.push(valor);
        }
       
        console.log("Predicción " + PrediccionNum + ":", Probabilidad);
    } else {
        console.error("El array no existe.");
    }
}























