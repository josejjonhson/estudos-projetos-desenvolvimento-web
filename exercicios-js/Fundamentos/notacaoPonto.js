console.log(Math.ceil(6.1)) // Vemos de cara a notação . para acessar a função log; E também para acessar a função ceil de Math;

const obj1 = {}
obj1.nome = 'Caderno' // Mesmo que o atributo em si aida não tenha sido criado previamente, ao utilizarmos o . ele cria dinamicamente;
// Também poderiamos criar da seguinte forma:
//obj1['preco'] = 59.99 // Tanto para criar quanto para acessar atributos já existentes;

console.log(obj1.nome)

// Flexibilidade gerada por essa forma de acesso por string; Não é interessante utilizarmos desse artifício;
const chave = 'nome'
obj1[chave] = "Computador"
console.log(obj1.nome)


function Obj (nome) {
    this.nome = nome 
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Computador')
const obj3 = new Obj('Cadeira')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()