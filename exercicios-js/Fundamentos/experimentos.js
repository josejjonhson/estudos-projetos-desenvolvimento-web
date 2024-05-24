let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variável maluca se var e let
abc = 3 // Não fazer isso!!! Dessa forma ela vai para o escopo global

// module.exports = { e: 456, f: false, g: 'teste' }

/**
 * Principios para tirar dessa aula:
 * - Entender o runtime;
 * - Evitar o escopo global;
 * - Caso seja preciso tocar o escopo global, que isso seja feito a partir de objetos;
 */