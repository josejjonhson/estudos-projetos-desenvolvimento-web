// Armazenando uma função em uma variável 
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 2)

const imprimirSubtracao = function (a, b) {
    console.log(a - b)
}

imprimirSubtracao(4, 2)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 6))

// Retorno implícito 
const subtracao = (a, b) => a - b // Executa uma única sentença de código. Quando temos esse senário onde temos apenas uma sentença, a mesma é retornada.

console.log(subtracao(4, 1))

/**
 * Caso eu tivesse apenas um parâmetro eu poderia omitir os parênteses  da escrita da função
 * const funcaoX = valor => "Faz alguma coisa"
 */

// Exemplo final utilizando apenas um parâmetro 
const imprimir2 = a => console.log(a)
imprimir2("Legal")
