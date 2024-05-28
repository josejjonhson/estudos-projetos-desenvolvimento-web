const notas = [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0]

/**
 * O objetivo é gerar um novo array com todas as notas menores que 7.0 
 */

// Sem uso de callback
const notasBaixas1 = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

/**
 * Essa função filter vai filtrar os elementos de um array em cima de algum critério. Que vai ser uma função callback que vai retornar true ou false.
 */

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)