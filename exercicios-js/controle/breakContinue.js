const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in numeros) {
    if(x == 5) {
        break
    }
    console.log(`${x} = ${numeros[x]}`)
}

/**
 * O break age sobre o loop for, e não sobre o if.
 */

console.log('Segundo for:')
for(let y in numeros) {
    if(y == 5) {
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}

/**
 * Utilizando rótulo.
 */

externo:
for(let a in numeros) {
    for(let b in numeros) {
        if(a == 2 && b == 3) {
            break externo
        }
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim do programa.')

/**
 * Básicamente definimos um rótulo para o for externo, pois, no momento que usamos o break lá dentro do if, ele ia atuar no for interno, 
 * não encerrando o laço de repetição como gostariamos. O objetivo era que o break atuasse no externo para poder encerrar o loop,
 * sendo assim, demos um rotulo a ele e na hora do break especificamos que o break era referente ao for externo.
 * OBS:. NÃO DEVEMOS UTILIZAR ISSO, É FEIO E COMPLEXO DE SER LIDO.
 */