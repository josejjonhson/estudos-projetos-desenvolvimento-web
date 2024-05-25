function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

/**
 * O while é uma estrutura de repetição. Um laço de repetição. Um loop. 
 * O while é mais coerente em situações onde não sabemos o número de repetições que queremos.
 */

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)

}

console.log('Fim do programa!')