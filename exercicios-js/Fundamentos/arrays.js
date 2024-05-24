/**
 * O array é uma forma de agrupar multiplos valores de uma forma linear, em uma única estrutura;
 */

const valores = [7.7, 8.9, 5.6, 7.0]
console.log(valores[0], valores[2])
//console.log(valores[10])

/**
 * Algumas considerações que podem ser feitas:
 * O js não gera um erro tentar acessar um índice inexistente;
 * Posso atribuir um valor a esse índice "inexisteste":
 * valores[4] = 12.5
 *
 * Posso adicionar um índice muito distante da quantidade de itens que já tenho no meu array:
 * valores[15] = 9.5
 *
 * Fazendo essa atribuição, no caso da exibição desse array com um console.log() por exemplo, no terminal é mostrado que existem x itens vazios, no caso, referentes ao pulo que demos ao adicionar um índice distante;
 */

valores[15] = 9.5
console.log(valores)

console.log("Tamanho do meu array " + valores.length)

// A função push adiciona valores a um array
valores.push({id: 2}, false, null, 'teste')
console.log(valores)

/**
 * Os arrays são bem Heterogêneos, recebem valores de vários tipos, porém, isso não significa que é uma boa prática adicionar valores de vários tipos;
 * Deve ser evitado a adição de elementos de vários tipos a um mesmo array;
 * Devemos sempre buscar ter arrays homogêneos, um array para cada tipo de dado;
 *
 * EXP:.
 * Array de prdutos, de notas, clientes, etc ...
 */

// A função pop() deleta o último elemento do array;
console.log(valores.pop())

// O 'delete' deleta por índice;
delete valores[1]
console.log(valores)

// Para ver o tipo do array podemos utilizar o 'typeof';
console.log(typeof valores) // O array é um objeto;
