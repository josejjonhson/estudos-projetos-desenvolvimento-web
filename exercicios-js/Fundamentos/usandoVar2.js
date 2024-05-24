var numero = 1

{
    var numero = 2
    console.log('Dentro =', numero) // Saída: 2
}

console.log('Fora =', numero) // Saída: 2

/**
 * Não existe escopo de bloco quando trabalhamos com variáveis do tipo "var"
 * Existe apenas o escopo de função
 */