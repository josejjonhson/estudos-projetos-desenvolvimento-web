/**
 * Quando estamos trabalhando com tipos primitivos temos cópia por valor. Quando estamos trabalhando 
 * com objetos a atribuição é feita por referência. A variável X aponta para um objeto em memória.
 */

const a = {nome: 'José'}
let b = a
b.nome = "Jonhson"
console.log(a.nome) // Podemos observar que o que foi mudado em b, foi enxergado também por a.

const x = 12
let y = x
y++
console.log(x)
console.log(y) // Vemos que se tratando de tipos primitivos o cenário muda, pois temos cópia por valor.

let valor // Não inicializada
console.log(valor)

valor = null // ausência de valor 
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 10.50
console.log(produto)

produto.preco = undefined // É recomendado que deixemos a atribuição de undefined restrita a propria linguagem, preferencialmente devemos utilizar o null.
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)

// OBS:. Quando temos uma variável nula não podemos acessar nenhum membro, função, atributo dela.
// Para zerar uma referência podemos usar o nulo. O undefinel é recomendado que fique por conta da linguagem atribuir.