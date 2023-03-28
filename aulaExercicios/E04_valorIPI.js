var IPI = Number.parseInt(prompt('digite o valor do IPI'));

var cod01 = prompt('digite o código da peça 1');

var qtd01 = Number.parseInt(prompt('digite a quantidade de peças compradas'));

var preco01 = Number.parseInt(prompt('digite o valor unitário da peça 01'));

var cod02 = prompt('digite o código da peça 2');

var qtd02 = Number.parseInt(prompt('digite a quantidade de peças compradas'));

var preco02 = Number.parseInt(prompt('digite o valor unitário da peça 02'));

var totalImposto = (qtd01*preco01 + qtd02*preco02) * (IPI/100 + 1);

console.log(totalImposto);


