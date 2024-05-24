// Função sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(12, 12)
imprimirSoma(2) // Ao passarmos apenas um valor, o segundo não informado se torna "undefined", sendo assim, essa soma resulta em "NaN"
imprimirSoma(2, 3, 4, 5, 6, 7, 8, 9, 10) // O js também deixa eu passar mais parâmetros do que o requerido, ele ignora os extras

// Função com retorno
function soma(a, b = 0) {
    return a + b
}

/**
 * "b = 0" determina que, caso o valor de b não seja informado, b deve ser considerado como 0
 * Isso é uma funcionalidade que foi implementada no ECMAScript 2015
 * Posso definir o valor padrão da forma que eu quiser
 */

console.log(soma(2))