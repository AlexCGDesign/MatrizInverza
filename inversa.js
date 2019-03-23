let j,k,aux;
let n = parseInt(prompt("Damatrize el valor de n"),10)
let matriz = new Array(n);
let identica = new Array(n);
let n1 = n*2;

// Creamos la identica
// for(let i = 0; i < n; i++){
//     identica[i] = new Array(n);
//     for(let j = 0; j < n; j++){
//         identica[i][j] = 0
//     }
// }

// for(let i = 0;i < n ; i++){
//     identica[i][i] = 1;
// }


// Pedimos los valores de la matriz

for(let i=0; i<n; i++) {
    matriz[i] = new Array(n1+1);
    for (let j = 0; j <= n; j++) {
        matriz[i][j] = parseInt(prompt("el valor numatrizero"),10) 
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

for(i=0;i<n;i++){ 
	alert(matriz[i][n-1])
}


function imprimirValores(){
    for(let m = 0; m <n;m++){
        for(let h = 0; h <=n1;h++){
            document.write(`[ ${matriz[m][h]} ]`)
        }
        document.write(`<br> <br>`)
    }
}
