





// Primero, define la función mostrarArrayEnDOM
function mostrarArrayEnDOM(array, elementId) {
    var arrayResultDiv = document.getElementById(elementId);
    arrayResultDiv.innerHTML = elementId + ' = [' + array.join('-') + ']';
    console.log('mostrarArrayEnDOM() llamada para ' + elementId);
    console.log(arrayResultDiv);


}

