/**
 * Ainda que o while seja mais coerente em situações onde não sabemos a quantidade de repetições que teremos, não significa que ele não serve para situações
 * onde sabemos exatamente a quantidade de vezes que queremos executar um determinado bloco de código.
 */

let contador = 1
while(contador <= 10) {
    console.log('Contador = ' + contador)
    contador++
}

/**
 * Famos fazer esse mesmo exemplo utilizando agora o for.
 */

for(let i = 0; i <= 10; i++) {
    console.log('i = ' + i)
}

// Exemplo com array.
const notas = [6.7, 7.4, 8.2, 10.0, 6.9, 8.7, 9.0]
for(let i = 0; i < notas.length; i++) {
    console.log('Nota no índice ' + i + ' -> ' + notas[i])
}