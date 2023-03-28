var cont = 1, impar=1, fracao=0;

while(cont<=50){

    console.log(impar+" / "+cont);
    
    fracao+=(impar/cont);
    impar+=2;
    cont++;
}

console.log(fracao);