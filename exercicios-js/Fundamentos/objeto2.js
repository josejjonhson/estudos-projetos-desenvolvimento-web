// A função pode ser instânciada a partir da palavra new;
console.log(typeof Object) // Tem como saída "function"
console.log(typeof new Object) // Tem como saída "object"
// console.log(typeof new Object())

const Cliente = function () {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6) é um detalhe de sintaxe mas que internamente cria uma função;
console.log(typeof Produto)
console.log(typeof new Produto)
console.log(typeof new Produto())

// A forma de criar um objeto em javascript e a partir de função;