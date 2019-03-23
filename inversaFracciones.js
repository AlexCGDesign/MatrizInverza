let j,k,aux;
let n = parseInt(prompt("¿De cuanto quieres tu matriz?"),10)
let matriz = new Array(n);
let identica = new Array(n);
let n1 = n*2;

// Pedimos los valores de la matriz

for(let i=0; i<n; i++) {
    matriz[i] = new Array(n1+1);
    for (let j = 0; j <= n; j++) {
        matriz[i][j] = parseFloat(prompt(`Dame el valor de [${i}][${j}]`),10) 
    }
}

// Agregamos la identica
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if(j==i){
            matriz[i][j+n+1] = 1;
        }
        else{
            matriz[i][j+n+1] = 0;
        }
    }   
}

imprimirValores();

for(let i=0;i<n;i++){
    if(matriz[i][i]!=0){
        aux=1/matriz[i][i];
        for(j=0;j<=n1;j++){
            matriz[i][j]=aux*matriz[i][j];
        }
        imprimirValores();
        for(j=0;j<n;j++){
            if(j!=i){
                aux=(matriz[j][i])*-1;
                for(k=0;k<=n1;k++){
                    matriz[j][k]=matriz[j][k]+aux*matriz[i][k];
                    // imprimirrValores();
                }
            }
            imprimirValores();
        }
    }
    imprimirValores(); 
}
for(let m = 0; m <n;m++){
    for(let h = 2; h <=n1;h++){
        document.write(`[ ${matriz[m][h]} ]`)
    }
    document.write(`<br> <br>`)
}
function imprimirValores(){
    for(let m = 0; m <n;m++){
        for(let h = 0; h <=n1;h++){
            if((matriz[m][h]%1)== 0 || (matriz[m][h]%1) == -0 ){
                document.write(`[ ${matriz[m][h]} ]`)
            }else{
                document.write(`[ ${decimalToFraction(matriz[m][h], false)} ]`)
            }
        }
        document.write(`<br> <br>`)
    }
}

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