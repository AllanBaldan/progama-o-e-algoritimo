var prestações= prompt ("Digite o Numero de Prestações");
var pagas= prompt ("Digite quantas Prestações você já pagou");
var valor= prompt ("Digite o valor dá Prestação");

var r1= parseInt (valor) * parseInt (pagas);
var r2= parseFloat (prestações) * parseInt (valor) - parseInt (r1);

alert("Você pagou="+r1+"Falta Você Pagar="+r2);
