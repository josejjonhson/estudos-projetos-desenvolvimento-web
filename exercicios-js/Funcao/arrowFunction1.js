let dobro = function(valor) {
    return valor * 2
}

// Essa mesma função como arrow
dobro = (a) => {
    return 2 * a
}

// Forma reduzida no caso de ter apenas um parâmetro. No caso de tirar as {} temos um retorno implícito.
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

// Em forma arrow
ola = () => 'Olá'
ola = _ => 'Olá' // Possui um param, mas uma vez que posso ignorar eles no js, essa é uma sintaxe mais curta que pode ser escrita também.
console.log(ola())