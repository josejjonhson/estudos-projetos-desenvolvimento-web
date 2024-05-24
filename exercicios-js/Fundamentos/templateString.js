const nome = "Jonhson"
const concatenacao = "Olá " + nome + "!"
const template = `Olá ${nome}!`
console.log(concatenacao)

console.log(`1 + 1 = ${1 + 1}`)

// Função arrow sendo chamada no template string
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

/**
 * O que ocorre é a interpolação:S
 * "introdução ou intercalação de palavras ou frases em um texto."
 */