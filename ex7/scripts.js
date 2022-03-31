var nomeVendedor = prompt("Digite o nome");
var salarioFixo = parseFloat(prompt("Digite o salário fixo"));
var totalVendas = prompt("Digite o total de vendas");
var percentualComissao = 15/100;
var valorComissao = totalVendas * percentualComissao;
var salarioFinal =salarioFixo * valorComissao;
alert("Sr(a)" + nomeVendedor + "\nSeu salário fixo é de: " + salarioFixo + "\nSalário total é de: " + salarioFinal)