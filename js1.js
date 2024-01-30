
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
    fuerzasDiv.innerHTML = 'Fuerzas = ' +'[ ' + JSON.stringify(fuerzas)+ ' - '+' ' + JSON.string + ']';
}

// Función para mostrar el array F0 en el DOM
function mostrarF0() {
    // Obtener el div por su id
    var fuerzasResultF0Div = document.getElementById('fuerzasResultF0');

    // Limpiar el contenido actual del div antes de agregar el nuevo texto
    fuerzasResultF0Div.innerHTML = 'F0 = '+'[ ' + JSON.stringify(F0)+' - '+ ']';
}
// Función para mostrar el array F0 en el DOM
function mostrarF1() {
    // Obtener el div por su id
    var fuerzasResultF1Div = document.getElementById('fuerzasResultF1');

    // Limpiar el contenido actual del div antes de agregar el nuevo texto
    fuerzasResultF0Div.innerHTML = 'F1 = ' + JSON.stringify(F1);
}
