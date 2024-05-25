// Função em JS é First-Class Object (Citizens)
// Higher-Order function

/**
 * Podemos tratar a função como dado, sendo assim, podemos passar como parâmetro, retornar, etc.
 * Posso criar uma função e armazenar em uma variável, posso ter uma função que dentro dela tem uma função, etc.
 */

// Criar de forma literal uma função.
function fun1() { console.log('Função um executada!') }
// Toda função por padrão retorna 'undefined', caso o 'return' não seja chamado.

// Armazenar uma função em uma variável.
const fun2  = function () { console.log('Função dois executada!') }

// Armazenar uma função em um array.
const array = [function (a, b) {return a + b}, fun1, fun2]

// array[1]()
// array[2]()
// console.log(array[0](2, 2))

// Armazenar em um atributo de um objeto 
const obj = {}
obj.falar = function() { return 'Olá' }
console.log(obj.falar())

// Passar função como parâmetro 
function run(fun) {
    fun()
}

run(function() { console.log('Função executada!') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)