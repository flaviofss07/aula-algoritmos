let farenheit = prompt('Informe o valor da temperatura em Farenheit?');

farenheit = parseFloat(farenheit);

let celsius = 5 * (farenheit - 32)/9;

alert(farenheit.toFixed(2) + ' °F correspondem a ' + celsius.toFixed(2) + ' °C');
