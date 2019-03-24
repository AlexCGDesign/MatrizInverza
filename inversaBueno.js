// Declaramos las variables
let boton = document.getElementById("obtenerNumero")
let agregar = document.getElementById("agregar")
let procedimiento = document.getElementById("procedimiento")
let resultado = document.getElementById("resultado")
let matriz
let h1, br;
let valor;

// Cuando el usuario haya introducido de cuanto quiere su matriz
// Aquí creamos los input, dandole la clase y posicionandolos 

boton.addEventListener("click", function () {
    valor = parseInt(document.getElementById("numeroMatriz").value, 10);
    for (let i = 1; i <= valor * valor + valor; i++) {
        h1 = document.createElement("input");
        h1.id = `valor${i}`
        agregar.appendChild(h1);
        h1.className = "input"
        h1.type = "text"
        if (i % (valor + 1) == 0) {
            br = document.createElement("br");
            agregar.appendChild(br);
        }
    }
})

// Aquí una vez que se haya dado click al boton, una vez que el usuario haya introducido
// los valores en el input, se introducirá aquí la matriz

resultado.addEventListener('click', function () {
    let n = valor;
    let j, k, aux;
    matriz = new Array(n);
    let n1 = n * 2;
    let contador = 1;
    let arreg = []
    for (let i = 0; i < n; i++) {
        matriz[i] = new Array(n1 + 1);
        for (let j = 0; j <= n; j++) {
            arreg[contador] = parseFloat(document.getElementById(`valor${contador}`).value);
            matriz[i][j] = arreg[contador]
            contador++
        }
    }
    // Agregamos la identica
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j == i) {
                matriz[i][j + n + 1] = 1;
            } else {
                matriz[i][j + n + 1] = 0;
            }
        }
    }
    

    imprimirValores();

    for (let i = 0; i < n; i++) {
        if (matriz[i][i] != 0) {
            aux = 1 / matriz[i][i];
            for (j = 0; j <= n1; j++) {
                matriz[i][j] = aux * matriz[i][j];
            }
            imprimirValores();
            for (j = 0; j < n; j++) {
                if (j != i) {
                    aux = (matriz[j][i]) * -1;
                    for (k = 0; k <= n1; k++) {
                        matriz[j][k] = matriz[j][k] + aux * matriz[i][k];
                    }
                }
                imprimirValores();
            }
        }
        imprimirValores();
    }

    function imprimirValores() {
        for (let m = 0; m < n; m++) {
            for (let h = 0; h <= n1; h++) {
                if ((matriz[m][h] % 1) == 0 || (matriz[m][h] % 1) == -0) {
                    // document.write(`[ ${matriz[m][h]} ]`)
                    h1 = document.createElement("a");
                    h1.innerText = `[ ${matriz[m][h]} ]`
                    procedimiento.appendChild(h1);
                } else {
                    // document.write(`[ ${decimalToFraction(matriz[m][h], false)} ]`)
                    h1 = document.createElement("a");
                    h1.innerText = `[ ${decimalToFraction(matriz[m][h], false)} ]`
                    procedimiento.appendChild(h1);
                }
            }
            h1 = document.createElement("br");
            procedimiento.appendChild(h1);
        }
        h1 = document.createElement("br");
        procedimiento.appendChild(h1);
    }

    // Función para compartir de decimales a fracciones

    function decimalToFraction(value, donly = true) {
        var tolerance = 1.0E-6; // a partir de cuantas decimales se hace el redondeo
        var h1 = 1;
        var h2 = 0;
        var k1 = 0;
        var k2 = 1;
        var negative = false;
        var i;

        if (parseInt(value) == value) { // si el valor es un número entero, detener el código
            return value;
        } else if (value < 0) {
            negative = true;
            value = -value;
        }

        if (donly) {
            i = parseInt(value);
            value -= i;
        }

        var b = value;

        do {
            var a = Math.floor(b);
            console.log(a)
            var aux = h1;
            h1 = a * h1 + h2;
            h2 = aux;
            aux = k1;
            k1 = a * k1 + k2;
            k2 = aux;
            b = 1 / (b - a);
        } while (Math.abs(value - h1 / k1) > value * tolerance);

        return (negative ? "-" : '') + ((donly & (i != 0)) ? i + ' ' : '') + (h1 == 0 ? '' : h1 + "/" + k1);
    }
})