/**
 * Desctucturing no contexto de funções;
 */

function rand ({min = 0, max = 1000} = {}) { // Objeto padrão " = {} "
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40}))
console.log(rand({min: 995}))
console.log(rand({}))
//console.log(rand())
