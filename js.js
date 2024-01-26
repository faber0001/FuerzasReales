 // Array global fg para almacenar posiciones
let fg = [];
const f0 = [], f1 = [], f2 = [], f3 = [], f4 = [], f5 = [], f6 = [], f7 = [], f8 = [], f9 = [],
      f10 = [], f11 = [], f12 = [], f13 = [], f14 = [], f15 = [], f16 = [], f17 = [], f18 = [], f19 = [],
      f20 = [], f21 = [], f22 = [], f23 = [], f24 = [], f25 = [], f26 = [], f27 = [], f28 = [], f29 = [],
      f30 = [], f31 = [], f32 = [], f33 = [], f34 = [], f35 = [], f36 = [], f37 = [];


// Función para actualizar el contenido del array en el HTML
function actualizarArrayEnHTML() {
    const arrayElement = document.getElementById('arrayResultado');
    arrayElement.textContent = `[${fg.join(', ')}]`;
}
  // Función para actualizar el contenido de los arrays f0 a f37 en el HTML
  function actualizarResultados(id, array) {
    const resultadosElement = document.getElementById(id);
    resultadosElement.textContent = `[${array.join(', ')}]`;
}
 
 // Función para calcular la distancia entre una caja y las cajas a su derecha
  function calcularDistancia(caso, numero) {
    // Definir las secuencias para cada caso
    const secuencias = [
        [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2],
        [1,37,27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 22, 34, 15, 3, 24, 36, 13],
        [
            2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14
        ],[
            3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15
        ], [
            4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16
        ],[
            5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17
        ],[
            6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18
        ],[
            7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11
        ],[
            8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12
        ],[
            9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28
        ], [
            10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27
        ],[
            11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30
        ],[
            12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29
        ],[
            13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36
        ],[
            14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35
        ], [
            15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34
        ],[
            16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33
        ],[
            17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32
        ],[
            18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31
        ],[
            19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8
        ],[
            20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7
        ],[
            21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6
        ],[
            22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5
        ],[
            23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4
        ],[
            24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3
        ],[
            25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10
        ],[
            26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9
        ],[
            27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37
        ],[
            28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0
        ],[
            29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25
        ],[
            30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26
        ],[
            31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19
        ],[
            32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20
        ],[
            33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21
        ],[
            34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22
        ],[
            35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23
        ],[
            36, 13, 1, 37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24
        ],[
            37, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2, 0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1
        ]];
        // Verificar si el caso proporcionado es válido
        if (caso >= 0 && caso < secuencias.length) {
            const secuencia = secuencias[caso];
            const posicionNumero = secuencia.indexOf(numero);

            // Actualizar arrays según la lógica descrita
            if (posicionNumero !== -1) {
                const valorPosicion1 = fg[1];
                if (valorPosicion1 === 0) {
                    f0.unshift(fg[0]);
                    actualizarResultados('f0Resultados', f0);
                } else if (valorPosicion1 === 1) {
                    f1.unshift(fg[0]);
                    actualizarResultados('f1Resultados', f1);
                } else if (valorPosicion1 === 2) {
                    f2.unshift(fg[0]);
                    actualizarResultados('f2Resultados', f2);
                }else if (valorPosicion1 === 3) {
                    f3.unshift(fg[0]);
                    actualizarResultados('f3Resultados', f3);
                }else if (valorPosicion1 === 4) {
                    f4.unshift(fg[0]);
                    actualizarResultados('f4Resultados', f4);
                }else if (valorPosicion1 === 5) {
                    f5.unshift(fg[0]);
                    actualizarResultados('f5Resultados', f5);
                }else if (valorPosicion1 === 6) {
                    f6.unshift(fg[0]);
                    actualizarResultados('f6Resultados', f6);
                }else if (valorPosicion1 === 7) {
                    f7.unshift(fg[0]);
                    actualizarResultados('f7Resultados', f7);
                }else if (valorPosicion1 === 8) {
                    f8.unshift(fg[0]);
                    actualizarResultados('f8Resultados', f8);
                }else if (valorPosicion1 === 9) {
                    f9.unshift(fg[0]);
                    actualizarResultados('f9Resultados', f9);
                }else if (valorPosicion1 === 10) {
                    f10.unshift(fg[0]);
                    actualizarResultados('f10Resultados', f10);
                }else if (valorPosicion1 === 11) {
                    f11.unshift(fg[0]);
                    actualizarResultados('f11Resultados', f11);
                }else if (valorPosicion1 === 12) {
                    f12.unshift(fg[0]);
                    actualizarResultados('f12Resultados', f12);
                }else if (valorPosicion1 === 13) {
                    f13.unshift(fg[0]);
                    actualizarResultados('f13Resultados', f13);
                }else if (valorPosicion1 === 14) {
                    f14.unshift(fg[0]);
                    actualizarResultados('f14Resultados', f14);
                }else if (valorPosicion1 === 15) {
                    f15.unshift(fg[0]);
                    actualizarResultados('f15Resultados', f15);
                }else if (valorPosicion1 === 16) {
                    f16.unshift(fg[0]);
                    actualizarResultados('f16Resultados', f16);
                }else if (valorPosicion1 === 17) {
                    f17.unshift(fg[0]);
                    actualizarResultados('f17Resultados', f17);
                }else if (valorPosicion1 === 18) {
                    f18.unshift(fg[0]);
                    actualizarResultados('f18Resultados', f18);
                }else if (valorPosicion1 === 19) {
                    f19.unshift(fg[0]);
                    actualizarResultados('f19Resultados', f19);
                }else if (valorPosicion1 === 20) {
                    f20.unshift(fg[0]);
                    actualizarResultados('f20Resultados', f20);
                }else if (valorPosicion1 === 21) {
                    f21.unshift(fg[0]);
                    actualizarResultados('f21Resultados', f21);
                }else if (valorPosicion1 === 22) {
                    f22.unshift(fg[0]);
                    actualizarResultados('f22Resultados', f22);
                }else if (valorPosicion1 === 23) {
                    f23.unshift(fg[0]);
                    actualizarResultados('f23Resultados', f23);
                }else if (valorPosicion1 === 24) {
                    f24.unshift(fg[0]);
                    actualizarResultados('f24Resultados', f24);
                }else if (valorPosicion1 === 25) {
                    f25.unshift(fg[0]);
                    actualizarResultados('f25Resultados', f25);
                }else if (valorPosicion1 === 26) {
                    f26.unshift(fg[0]);
                    actualizarResultados('f26Resultados', f26);
                }else if (valorPosicion1 === 27) {
                    f27.unshift(fg[0]);
                    actualizarResultados('f27Resultados', f27);
                }else if (valorPosicion1 === 28) {
                    f28.unshift(fg[0]);
                    actualizarResultados('f28Resultados', f28);
                }else if (valorPosicion1 === 29) {
                    f29.unshift(fg[0]);
                    actualizarResultados('f29Resultados', f29);
                }else if (valorPosicion1 === 30) {
                    f30.unshift(fg[0]);
                    actualizarResultados('f30Resultados', f30);
                }else if (valorPosicion1 === 31) {
                    f31.unshift(fg[0]);
                    actualizarResultados('f31Resultados', f31);
                }else if (valorPosicion1 === 32) {
                    f32.unshift(fg[0]);
                    actualizarResultados('f32Resultados', f32);
                }else if (valorPosicion1 === 33) {
                    f33.unshift(fg[0]);
                    actualizarResultados('f33Resultados', f33);
                }else if (valorPosicion1 === 34) {
                    f34.unshift(fg[0]);
                    actualizarResultados('f34Resultados', f34);
                }else if (valorPosicion1 === 35) {
                    f35.unshift(fg[0]);
                    actualizarResultados('f35Resultados', f35);
                }else if (valorPosicion1 === 36) {
                    f36.unshift(fg[0]);
                    actualizarResultados('f36Resultados', f36);
                }else if (valorPosicion1 === 37) {
                    f37.unshift(fg[0]);
                    actualizarResultados('f37Resultados', f37);
                }
                // ... y así sucesivamente para los demás arrays
            }

            return posicionNumero;
        } else {
            return -1; // Devolver -1 si el caso no es válido
        }
    }
           

     



 // Función para ser llamada desde el botón de consulta
 function consultarPosicion() {
    const caso = parseInt(document.getElementById('caso').value);
    const numeroConsulta = parseInt(document.getElementById('numeroConsulta').value);

    const posicionNumero = calcularDistancia(caso, numeroConsulta);

    // Actualizar el array fg con la posición del número
    fg.unshift(posicionNumero);

    // Mostrar resultados en la página
    const resultadosElement = document.getElementById('posicionResultado');
    resultadosElement.textContent = `La posición del número ${numeroConsulta} en el caso ${caso} es: ${posicionNumero}`;
    // Mostrar el contenido del array fg en tiempo real
    actualizarArrayEnHTML();
    // Comparar valor de la posición 1 del array fg con los índices de f0 a f37
    if (fg.length > 1) {
        const valorPosicion1 = fg[1];

        if (valorPosicion1 === 0) {
            // Insertar en f0
            f0.unshift(fg[0]);
            actualizarResultados('f0Resultados', f0);
        } else if (valorPosicion1 === 1) {
            // Insertar en f1
            f1.unshift(fg[0]);
            actualizarResultados('f1Resultados','f ${caso}', f1);
        }
        // Repetir para los demás arrays f2, f3, ..., f37
    }

    // Mostrar el contenido del array fg en tiempo real
    const arrayResultadoElement = document.getElementById('arrayResultado');
    arrayResultadoElement.textContent = JSON.stringify(ffg);
}
   