/**
 * Novo recurso do ES2015
 * Operador destructuring, desestruturação;
 * Representado por {}
 */

const pessoa = {
    nome: 'José',
    idade: 20,
    endereco: {
        logradouro: 'Rua tal',
        numero: 100
    }
}

/** 
 * Supondo que a partir do objeto pessoa eu quero extrair as variáveis nome e idade;
 * 
 * Forma padrão:
 * const nome = pessoa.nome
 * const idade = pessoa.idade
 * 
 */

// Usando o operador destructuring:
const {nome, idade} = pessoa // "Tire do objeto pessoa os atributos nome e idade";
console.log(nome, idade)

const {nome : n, idade : i} = pessoa
console.log(n, i)

// Retirando um atributo que não existe;
const {sobrenome} = pessoa
console.log(sobrenome)

/**
 * O programa retorna undefined, ou seja, existe mas não foi declarada, não está apontando para nada;
 * Podemos definir um valor padrão para a variável para que isso não aconteça;
 */

const {isEstudando = true} = pessoa
console.log(isEstudando) 

// Para acessar os atributos que estão dentro de endereço:
const { endereco: { logradouro, numero, cep = 5600000 } } = pessoa // Será criado (logradouro, numero, cep) extraindo de pessoa e olhando dentro de endereco;
console.log(logradouro, numero, cep)