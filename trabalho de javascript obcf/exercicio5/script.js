let numero = 25;

function verificarParidade(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(numero, "25 é impar", verificarParidade(numero));