let j,k,aux;
let n = parseInt(prompt("Damatrize el valor de n"),10)
let matriz = new Array(n);
for(let i=0; i<n; i++) {
    matriz[i] = new Array(n);
    for (let j = 0; j <= n; j++) {
        matriz[i][j] = parseInt(prompt("el valor numatrizero"),10) 
    }
}

imprimirValores();

for(let i=0;i<n;i++){
    if(matriz[i][i]!=0){
        aux=1/matriz[i][i];
        for(j=0;j<=n;j++){
            matriz[i][j]=aux*matriz[i][j];
        }
        imprimirValores();
        for(j=0;j<n;j++){
            if(j!=i){
                aux=(matriz[j][i])*-1;
                for(k=0;k<=n;k++){
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
        for(let h = 0; h <=n;h++){
            document.write(`[ ${matriz[m][h]} ]`)
        }
        document.write(`<br> <br>`)
    }
}
