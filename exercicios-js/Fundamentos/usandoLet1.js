var numero = 1 // Mudando essa variável para let temos o mesmo resultado;
{
    let numero = 2 // Variáveis let tem escopo de bloco; Estará vusível apenas no bloco que foi declarado;
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)

/**
 * Embora as variáveis tenham o mesmo nome, pelo fato de estarem em escopos diferentes elas podem coexistir;
 * Outra caracteristica é a prioridade de escopo. Quanto menor o escopo, maior a prioridade da escolha;
 * Acompanhando o exemplo abaixo: ...
 */

let x = 2
// Abrindo um escopo;
{
    let x = 5;
    console.log(x)
}

/**
 * Ao executar o código nós vemos que a saída gerada é 5, ainda que as duas variáveis tenham o mesmo nome;
 * Isso ocorre porque o console.log() "procurou" em seu bloco e já encontrou uma variável x, exibindo assim o valor atribuido a ela;
 * Caso o a variável x de dentro do bloco de chaves fosse alterada para y, o console.log() exibiria em vez de 5, o 2. Uma vez que o programa não 
 * encontraria em seu bloco, e passaria a níveis acima, se deparando com a variável x que possui valor 2 atribuido;
 */

/**
 * OBS:.
 * 
 * Variáveis definidas com a palavra reservada 'var':
 * - Escopo de função
 * - Escopo global
 * 
 * Variáveis definidas com a palavra reservada 'let':
 * - Escopo global
 * - Escopo de função 
 * - Escopo de bloco
 * 
 */
