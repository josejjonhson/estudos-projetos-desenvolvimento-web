/**
 * Desestruturação de uma estrutura de array;
 * Lembrar de assistir a aula 65 dos fundamentos em caso de dúvidas;
 */

const [a] = [10] // Variável a recebe 10 que é o primeiro elemento do array
console.log(a)

const [n1, n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

/**
 * Uma nota importante a se ter é que:
 * Destructuring no contexto de objetos usa a notação de {}
 * Em contexto de array usa a notação de []
 */