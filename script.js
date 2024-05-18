//Solicitamos las variables 
let num1 = parseFloat(prompt("Ingrese el Primer numero:"));

let num2 = parseFloat(prompt("Ingrese el Segundo numero:"));

let operacion = prompt("Ingrese la operación a realizar (+, -, *, /, %):");

//Variable
let resultado;

//Casos 
if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        resultado = "Error";
    }
} else if (operacion === "%") {
    resultado = num1 % num2;
} else {
    resultado = "Operación no válida";
}

//Resultado
alert("El resultado de la operación es: " + resultado);
