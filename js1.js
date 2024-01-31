
// Primero, define la función mostrarArrayEnDOM
function mostrarArrayEnDOM(array, elementId) {
    var arrayResultDiv = document.getElementById(elementId);
    arrayResultDiv.innerHTML = elementId + ' = [' + array.join('-') + ']';
    console.log('mostrarArrayEnDOM() llamada para ' + elementId);
    console.log(arrayResultDiv);


}

//prediccion probabiidad 
function prediccionNumeros() {
    console.log("PrediccionNum", PrediccionNum);
    let caso=PrediccionNum;
    switch (PrediccionNum) {
        case 0:
        
            if (F0.length === 0) {
                console.log("El array F1 está vacío");
            }

            // Declarar numPrediccion dentro del caso para reiniciarlo
            let numPrediccion0 = [];

            // Iterar sobre las posiciones en F0
            for (let i = 0; i < F0.length; i++) {
                // Obtener el valor de la posición correspondiente en f0 y agregarlo a la lista de predicciones
                let posicion = F0[i];
                let valor = f0[posicion];
                numPrediccion0.push(valor);

                // Mostrar la información después de cada iteración
                console.log(numPrediccion0);
                mostrarArrayEnDOM(numPrediccion0, 'PROBABILIDAD');

                // Pausar la ejecución para permitir que la interfaz de usuario se actualice
                setTimeout(() => {}, 0);
            }
            console.log("Prediccion 0 = ", numPrediccion0);
            break;  
        case 1:
               
                if (F1.length === 0) {
                    console.log("El array F1 está vacío");
                    }
                    let numPrediccion1 = [];
                    for (let i = 0; i < F1.length; i++) {
                         let posicion = F1[i];
                         let valor = f1[posicion];
                         numPrediccion1.push(valor);
                         console.log(numPrediccion1);
                         mostrarArrayEnDOM(numPrediccion1, 'PROBABILIDAD');
                         setTimeout(() => {}, 0);
                    }
                    console.log("Probabilidad del 1  = ", numPrediccion1);
                    break;  
         case 2:
                
                    if (F2.length === 0) {
                        console.log("El array F2 está vacío");
                        }
                        let numPrediccion2 = [];
                        for (let i = 0; i < F2.length; i++) {
                             let posicion = F2[i];
                             let valor = f2[posicion];
                             numPrediccion2.push(valor);
                             console.log(numPrediccion2);
                             mostrarArrayEnDOM(numPrediccion2, 'PROBABILIDAD');
                             setTimeout(() => {}, 0);
                         }
                         console.log("Probabilidad del 2 :  = ", numPrediccion2);
                         break; 
        // ...

// Caso 3
case 3:
    
    if (F3.length === 0) {
        console.log(`El array F3 está vacío`);
    }
    let numPrediccion3 = [];
    for (let i = 0; i < F3.length; i++) {
        let posicion = F3[i];
        let valor = f3[posicion];
        numPrediccion3.push(valor);
        console.log(numPrediccion3);
        mostrarArrayEnDOM(numPrediccion3, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log("Probabilidad del 3:  = ", numPrediccion3);
    break;

// Caso 4
case 4:
    
    if (F4.length === 0) {
        console.log(`El array F4 está vacío`);
    }
    let numPrediccion4 = [];
    for (let i = 0; i < F4.length; i++) {
        let posicion = F4[i];
        let valor = f4[posicion];
        numPrediccion4.push(valor);
        console.log(numPrediccion4);
        mostrarArrayEnDOM(numPrediccion4, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad del 4 = `, numPrediccion4);
    break;

// Caso 5
case 5:

    if (F5.length === 0) {
        console.log(`El array F5 está vacío`);
    }
    let numPrediccion5 = [];
    for (let i = 0; i < F5.length; i++) {
        let posicion = F5[i];
        let valor = f5[posicion];
        numPrediccion5.push(valor);
        console.log(numPrediccion5);
        mostrarArrayEnDOM(numPrediccion5, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad del 5 = `, numPrediccion5);
    break;

// Caso 6
case 6:
    
    if (F6.length === 0) {
        console.log(`El array F6 está vacío`);
    }
    let numPrediccion6 = [];
    for (let i = 0; i < F6.length; i++) {
        let posicion = F6[i];
        let valor = f6[posicion];
        numPrediccion6.push(valor);
        console.log(numPrediccion6);
        mostrarArrayEnDOM(numPrediccion6, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad del 6 = `, numPrediccion6);
    break;

// Caso 7
case 7:

    if (F7.length === 0) {
        console.log(`El array F7 está vacío`);
    }
    let numPrediccion7 = [];
    for (let i = 0; i < F7.length; i++) {
        let posicion = F7[i];
        let valor = f7[posicion];
        numPrediccion7.push(valor);
        console.log(numPrediccion7);
        mostrarArrayEnDOM(numPrediccion7, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad del 7 = `, numPrediccion7);
    break;

// Caso 8
case 8:

    if (F8.length === 0) {
        console.log(`El array F8 está vacío`);
    }
    let numPrediccion8 = [];
    for (let i = 0; i < F8.length; i++) {
        let posicion = F8[i];
        let valor = f8[posicion];
        numPrediccion8.push(valor);
        console.log(numPrediccion8);
        mostrarArrayEnDOM(numPrediccion8, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad numero 8 = `, numPrediccion8);
    break;

// Caso 9
case 9:
    
    if (F9.length === 0) {
        console.log(`El array F9 está vacío`);
    }
    let numPrediccion9 = [];
    for (let i = 0; i < F9.length; i++) {
        let posicion = F9[i];
        let valor = f9[posicion];
        numPrediccion9.push(valor);
        console.log(numPrediccion9);
        mostrarArrayEnDOM(numPrediccion9, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 9 = `, numPrediccion9);
    break;

// ...
// ...

// Caso 10
case 10:
    
    if (F10.length === 0) {
        console.log(`El array F10 está vacío`);
    }
    let numPrediccion10 = [];
    for (let i = 0; i < F10.length; i++) {
        let posicion = F10[i];
        let valor = f10[posicion];
        numPrediccion10.push(valor);
        console.log(numPrediccion10);
        mostrarArrayEnDOM(numPrediccion10, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 10 = `, numPrediccion10);
    break;

// Caso 11
case 11:
    
    if (F11.length === 0) {
        console.log(`El array F11 está vacío`);
    }
    let numPrediccion11 = [];
    for (let i = 0; i < F11.length; i++) {
        let posicion = F11[i];
        let valor = f11[posicion];
        numPrediccion11.push(valor);
        console.log(numPrediccion11);
        mostrarArrayEnDOM(numPrediccion11, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad caso 11 = `, numPrediccion11);
    break;

// Caso 12
case 12:

    if (F12.length === 0) {
        console.log(`El array F12 está vacío`);
    }
    let numPrediccion12 = [];
    for (let i = 0; i < F12.length; i++) {
        let posicion = F12[i];
        let valor = f12[posicion];
        numPrediccion12.push(valor);
        console.log(numPrediccion12);
        mostrarArrayEnDOM(numPrediccion12, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 12 = `, numPrediccion12);
    break;

// Caso 13
case 13:

    if (F13.length === 0) {
        console.log(`El array F13 está vacío`);
    }
    let numPrediccion13 = [];
    for (let i = 0; i < F13.length; i++) {
        let posicion = F13[i];
        let valor = f13[posicion];
        numPrediccion13.push(valor);
        console.log(numPrediccion13);
        mostrarArrayEnDOM(numPrediccion13, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 13 = `, numPrediccion13);
    break;

// Caso 14
case 14:
    
    if (F14.length === 0) {
        console.log(`El array F14 está vacío`);
    }
    let numPrediccion14 = [];
    for (let i = 0; i < F14.length; i++) {
        let posicion = F14[i];
        let valor = f14[posicion];
        numPrediccion14.push(valor);
        console.log(numPrediccion14);
        mostrarArrayEnDOM(numPrediccion14, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 14 = `, numPrediccion14);
    break;

// Caso 15
case 15:
    
    if (F15.length === 0) {
        console.log(`El array F15 está vacío`);
    }
    let numPrediccion15 = [];
    for (let i = 0; i < F15.length; i++) {
        let posicion = F15[i];
        let valor = f15[posicion];
        numPrediccion15.push(valor);
        console.log(numPrediccion15);
        mostrarArrayEnDOM(numPrediccion15, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 15 = `, numPrediccion15);
    break;

// Caso 16
case 16:
    
    if (F16.length === 0) {
        console.log(`El array F15 está vacío`);
    }
    let numPrediccion16 = [];
    for (let i = 0; i < F16.length; i++) {
        let posicion = F16[i];
        let valor = f16[posicion];
        numPrediccion16.push(valor);
        console.log(numPrediccion16);
        mostrarArrayEnDOM(numPrediccion16, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 15 = `, numPrediccion16);
    break;

// Caso 17
case 17:
    
    
    if (F17.length === 0) {
        console.log(`El array F17 está vacío`);
    }
    let numPrediccion17 = [];
    for (let i = 0; i < F17.length; i++) {
        let posicion = F17[i];
        let valor = f17[posicion];
        numPrediccion17.push(valor);
        console.log(numPrediccion17);
        mostrarArrayEnDOM(numPrediccion17, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 17 = `, numPrediccion17);
    break;

// Caso 18
case 18:
    
    if (F18.length === 0) {
        console.log(`El array F18 está vacío`);
    }
    let numPrediccion18 = [];
    for (let i = 0; i < F18.length; i++) {
        let posicion = F18[i];
        let valor = f18[posicion];
        numPrediccion18.push(valor);
        console.log(numPrediccion18);
        mostrarArrayEnDOM(numPrediccion18, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 17 = `, numPrediccion18);
    break;

// Caso 19
case 19:
    
    if (F19.length === 0) {
        console.log(`El array F19 está vacío`);
    }
    let numPrediccion19 = [];
    for (let i = 0; i < F19.length; i++) {
        let posicion = F19[i];
        let valor = f19[posicion];
        numPrediccion19.push(valor);
        console.log(numPrediccion19);
        mostrarArrayEnDOM(numPrediccion19, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 10 = `, numPrediccion19);
    break;

// ...
// ...

// Caso 20
case 20:
    
    if (F20.length === 0) {
        console.log(`El array F20 está vacío`);
    }
    let numPrediccion20 = [];
    for (let i = 0; i < F20.length; i++) {
        let posicion = F20[i];
        let valor = f20[posicion];
        numPrediccion20.push(valor);
        console.log(numPrediccion20);
        mostrarArrayEnDOM(numPrediccion20, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 20 = `, numPrediccion20);
    break;

// Caso 21
case 21:
    
    if (F21.length === 0) {
        console.log(`El array F21 está vacío`);
    }
    let numPrediccion21 = [];
    for (let i = 0; i < F21.length; i++) {
        let posicion = F21[i];
        let valor = f21[posicion];
        numPrediccion21.push(valor);
        console.log(numPrediccion21);
        mostrarArrayEnDOM(numPrediccion21, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 21 = `, numPrediccion21);
    break;

// Caso 22
case 22:
    
    if (F22.length === 0) {
        console.log(`El array F22 está vacío`);
    }
    let numPrediccion22 = [];
    for (let i = 0; i < F22.length; i++) {
        let posicion = F22[i];
        let valor = f22[posicion];
        numPrediccion22.push(valor);
        console.log(numPrediccion22);
        mostrarArrayEnDOM(numPrediccion22, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 22 = `, numPrediccion22);
    break;

// Caso 23
case 23:
    
    if (F23.length === 0) {
        console.log(`El array F23 está vacío`);
    }
    let numPrediccion23 = [];
    for (let i = 0; i < F23.length; i++) {
        let posicion = F23[i];
        let valor = f23[posicion];
        numPrediccion23.push(valor);
        console.log(numPrediccion23);
        mostrarArrayEnDOM(numPrediccion23, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 23 = `, numPrediccion23);
    break;

// Caso 24
case 24:
    
    if (F24.length === 0) {
        console.log(`El array F24 está vacío`);
    }
    let numPrediccion24 = [];
    for (let i = 0; i < F24.length; i++) {
        let posicion = F24[i];
        let valor = f24[posicion];
        numPrediccion24.push(valor);
        console.log(numPrediccion24);
        mostrarArrayEnDOM(numPrediccion24, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 24 = `, numPrediccion24);
    break;

// Caso 25
case 25:
    
    if (F25.length === 0) {
        console.log(`El array F25 está vacío`);
    }
    let numPrediccion25 = [];
    for (let i = 0; i < F25.length; i++) {
        let posicion = F25[i];
        let valor = f25[posicion];
        numPrediccion25.push(valor);
        console.log(numPrediccion25);
        mostrarArrayEnDOM(numPrediccion25, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 25 = `, numPrediccion25);
    break;

// Caso 26
case 26:
    
    if (F26.length === 0) {
        console.log(`El array F26 está vacío`);
    }
    let numPrediccion26 = [];
    for (let i = 0; i < F26.length; i++) {
        let posicion = F26[i];
        let valor = f26[posicion];
        numPrediccion26.push(valor);
        console.log(numPrediccion26);
        mostrarArrayEnDOM(numPrediccion26, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 26 = `, numPrediccion26);
    break;

// Caso 27
case 27:
    
    if (F27.length === 0) {
        console.log(`El array F27 está vacío`);
    }
    let numPrediccion27 = [];
    for (let i = 0; i < F27.length; i++) {
        let posicion = F27[i];
        let valor = f27[posicion];
        numPrediccion27.push(valor);
        console.log(numPrediccion27);
        mostrarArrayEnDOM(numPrediccion27, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 27 = `, numPrediccion27);
    break;

// Caso 28
case 28:

    if (F28.length === 0) {
        console.log(`El array F28 está vacío`);
    }
    let numPrediccion28 = [];
    for (let i = 0; i < F28.length; i++) {
        let posicion = F28[i];
        let valor = f28[posicion];
        numPrediccion28.push(valor);
        console.log(numPrediccion28);
        mostrarArrayEnDOM(numPrediccion28, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 28 = `, numPrediccion28);
    break;

// Caso 29
case 29:
    
    if (F29.length === 0) {
        console.log(`El array F29 está vacío`);
    }
    let numPrediccion29 = [];
    for (let i = 0; i < F29.length; i++) {
        let posicion = F29[i];
        let valor = f29[posicion];
        numPrediccion29.push(valor);
        console.log(numPrediccion29);
        mostrarArrayEnDOM(numPrediccion29, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 29 = `, numPrediccion29);
    break;

// ...
// ...

// Caso 30
case 30:
    
    if (F30.length === 0) {
        console.log(`El array F30 está vacío`);
    }
    let numPrediccion30 = [];
    for (let i = 0; i < F30.length; i++) {
        let posicion = F30[i];
        let valor = f30[posicion];
        numPrediccion30.push(valor);
        console.log(numPrediccion30);
        mostrarArrayEnDOM(numPrediccion30, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 30 = `, numPrediccion30);
    break;

// Caso 31
case 31:

    if (F31.length === 0) {
        console.log(`El array F31 está vacío`);
    }
    let numPrediccion31 = [];
    for (let i = 0; i < F31.length; i++) {
        let posicion = F31[i];
        let valor = f31[posicion];
        numPrediccion31.push(valor);
        console.log(numPrediccion31);
        mostrarArrayEnDOM(numPrediccion31, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 31 = `, numPrediccion31);
    break;

// Caso 32
case 32:
    
    if (F32.length === 0) {
        console.log(`El array F32 está vacío`);
    }
    let numPrediccion32 = [];
    for (let i = 0; i < F32.length; i++) {
        let posicion = F32[i];
        let valor = f32[posicion];
        numPrediccion32.push(valor);
        console.log(numPrediccion32);
        mostrarArrayEnDOM(numPrediccion32, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 32 = `, numPrediccion32);
    break;

// Caso 33
case 33:
    
    if (F33.length === 0) {
        console.log(`El array F33 está vacío`);
    }
    let numPrediccion33 = [];
    for (let i = 0; i < F33.length; i++) {
        let posicion = F33[i];
        let valor = f33[posicion];
        numPrediccion33.push(valor);
        console.log(numPrediccion33);
        mostrarArrayEnDOM(numPrediccion33, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 33 = `, numPrediccion33);
    break;

// Caso 34
case 34:
    
    if (F34.length === 0) {
        console.log(`El array F34 está vacío`);
    }
    let numPrediccion34 = [];
    for (let i = 0; i < F34.length; i++) {
        let posicion = F34[i];
        let valor = f34[posicion];
        numPrediccion34.push(valor);
        console.log(numPrediccion34);
        mostrarArrayEnDOM(numPrediccion34, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 34 = `, numPrediccion34);
    break;

// Caso 35
case 35:
    
    if (F35.length === 0) {
        console.log(`El array F35 está vacío`);
    }
    let numPrediccion35 = [];
    for (let i = 0; i < F35.length; i++) {
        let posicion = F35[i];
        let valor = f35[posicion];
        numPrediccion35.push(valor);
        console.log(numPrediccion35);
        mostrarArrayEnDOM(numPrediccion35, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 35 = `, numPrediccion35);
    break;

// Caso 36
case 36:

    if (F36.length === 0) {
        console.log(`El array F36 está vacío`);
    }
    let numPrediccion36 = [];
    for (let i = 0; i < F36.length; i++) {
        let posicion = F36[i];
        let valor = f36[posicion];
        numPrediccion36.push(valor);
        console.log(numPrediccion36);
        mostrarArrayEnDOM(numPrediccion36, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 36 = `, numPrediccion36);
    break;

// Caso 37
case 37:
    
    if (F37.length === 0) {
        console.log(`El array F37 está vacío`);
    }
    let numPrediccion37 = [];
    for (let i = 0; i < F37.length; i++) {
        let posicion = F37[i];
        let valor = f37[posicion];
        numPrediccion37.push(valor);
        console.log(numPrediccion37);
        mostrarArrayEnDOM(numPrediccion37, 'PROBABILIDAD');
        setTimeout(() => {}, 0);
    }
    console.log(`Probabilidad para caso 37 = `, numPrediccion37);
    break;

// ...
                                                      
        default:
            console.log("PrediccionNum no tiene un caso válido");
            break;
    }
}
