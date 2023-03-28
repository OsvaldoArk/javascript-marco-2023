//var numero = Number.parseInt(prompt('digite um número com 4 dígitos'));
//adicionando o comentário
var numero = 1000;

while(numero<9999){
    var ab  = Math.trunc(numero /100);
    
    var cd = numero % 100;
    
    var ef = ab + cd;
    
    var magica = ef**2;
    
    if(magica==numero)  console.log(numero);

    numero++;
}

/*
console.log(ab);
console.log(cd);
console.log(ef);
console.log(magica);*/