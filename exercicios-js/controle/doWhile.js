function getInteiroAleatorioEntre(minimo, maximo) {
    const valor = Math.random() * (maximo - minimo) + minimo
    return Math.floor(valor)
}

let opcao = -1 // Se fosse um while comum não executaria pois o -1 não passaria na condição do loop.

/**
 * O do while executa pelo menos uma vez antes de fazer a verificação de condição de loop.
 */

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1) 

console.log('Fim do Programa.')