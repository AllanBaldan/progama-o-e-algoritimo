var a = parseInt (prompt ("Digite o valor de A"));
var b = parseInt (prompt ("Digite o valor de B"));

var c = a;
a = b;
b = c;

alert("O valor de A é: " + a + "\nO valor de B é: " + b);