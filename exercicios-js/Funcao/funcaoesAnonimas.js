// Função anônima é uma função que não tem nome.

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // Uma arrow function é sempre anônima. Enquanto uma função tradicional pode ou não ser nomeada.

// Outra forma de criar uma função anônima é por meio de objetos. Quando criamos uma função dentro de um objeto.

const pessoa = {
    falar: function () {
        console.log('Bom dia!')
    },

    // Outra sintaxe é:
    falarNome() {
        console.log('Meu nome é josé')
    }
}

pessoa.falar()
pessoa.falarNome()