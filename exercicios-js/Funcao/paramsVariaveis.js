// Função com argumentos variáveis.
function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2, 3, 4, 5, 6, 7, 10))
console.log(soma(2, 3, 4, 5, 6, 7, 'Teste'))
console.log(soma('a', 'b', 'c')) // O zero já está presente na saira pois é resultado do retorno da variável soma.