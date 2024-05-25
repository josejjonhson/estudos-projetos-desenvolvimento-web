const notas = [6.7, 7.4, 8.2, 10.0, 6.9, 8.7, 9.0]

// Utilização do for in.
for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'José',
    sobrenome: 'Jonhson',
    idade: 20
}

// Utilização do for in com objetos
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}