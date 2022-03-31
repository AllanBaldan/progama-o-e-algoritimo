var carro= prompt ("Digite o Valor do Carro");

var imposto= parseInt (carro * 45/100);
var taxa= parseInt (carro * 25/100);
var carrocomimpostos = parseInt(carro) + parseInt (imposto) + parseInt (taxa);

alert ("O Valor do Carro Com as Taxas="+carrocomimpostos);