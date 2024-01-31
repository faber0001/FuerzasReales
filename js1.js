document.addEventListener("DOMContentLoaded", function() {
// Función para mostrar el array fuerzas en el DOM
function mostrarFuerzasArray() {
    // Verificar si el tamaño de fuerzas es mayor a 0
    if (fuerzas.length > 0) {
        // Obtener el div por su id
        var fuerzasDiv = document.getElementById('fuerzas');

        // Limpiar el contenido actual del div antes de agregar el nuevo texto
        fuerzasDiv.innerHTML = 'Fuerzas = [' + fuerzas.join('-') + ']';
    }
}



// Primero, define la función mostrarArrayEnDOM
function mostrarArrayEnDOM(array, elementId) {
    var arrayResultDiv = document.getElementById(elementId);
    arrayResultDiv.innerHTML = elementId + ' = [' + array.join('-') + ']';
    console.log('mostrarArrayEnDOM() llamada para ' + elementId);
    console.log(arrayResultDiv);
}





