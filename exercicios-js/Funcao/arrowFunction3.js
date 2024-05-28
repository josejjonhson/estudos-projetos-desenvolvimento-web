// No contexto run time do Node o escopo mais alto, mais geral, é o global. No contexto de browser é o window.

let comparaComThis = function (param) {
    console.log(this === param) 
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // Não aponta mais para o global
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // Não aponta para o global!...??? Em vez disso aponta para o arquivo em que a função foi definida.
comparaComThisArrow(module.exports)
comparaComThisArrow(this)
comparaComThis(this) // O this não é o this...

// Tentando mudar a referência do this com a função bind()

let testeRadical = param => console.log(this === param)
testeRadical = testeRadical.bind(obj)
testeRadical(obj) // A arrow function é mais forte.
testeRadical(module.exports)

// O this de uma função arrow é um this associado ao contexto no qual a função foi escrita.