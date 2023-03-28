var vetor = [];
var x = Math.round((Math.random * 99)+1);
var diferenca = 0, par01=0,par02=0; 

for(var contador = 0;contador<10;contador++){
    vetor[contador] = Math.round((Math.random() * 99)+1);
}

vetor = [7, 25, 60,  6, 79, 44, 12, 18, 93, 63]

for(var contador = 0;contador<10;contador++){
    if(contador<9){
        d =Math.abs(vetor[contador] - vetor[contador+1]);
        if(d > diferenca){
            diferenca = d;
            par01 = vetor[contador];
            par02 = vetor[contador+1];
        }
    }
}
41
console.log(vetor);
console.log(par01);
console.log(par02);