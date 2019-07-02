let valorPorHoraTrabalhada = prompt('Informe o valor da sua hora trabalhada?');

valorPorHoraTrabalhada = parseFloat(valorPorHoraTrabalhada);

let quantidadeHorasTrabalhada = prompt('Informe quantas horas você trabalhou?');

quantidadeHorasTrabalhada = parseFloat(quantidadeHorasTrabalhada);

let salarioMes = valorPorHoraTrabalhada * quantidadeHorasTrabalhada;

alert('O salário neste mês é R$ ' + salarioMes);