const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!!!')
    } else {
        console.log('Reprovado!!!')
    }
}

/**
 * Como só tem uma sentença de código associada a o if e a o else eu posso omitir as chaves caso queira.
 */

imprimirResultado(10)
imprimirResultado(6)

// CUIDADO COM JS POIS É UMA LINGUAGEM FRACAMENTE TIPADA E PERMITE ESSE TIPO DE SITUAÇÃO.
imprimirResultado('Epa!!!')