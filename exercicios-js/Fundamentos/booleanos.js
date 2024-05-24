/**
* Conhecendo o tipo primitivo boolean;
*/

let isAtivo = false // O boolean comporta básicamente true ou false (verdadeiro | falso);
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // Esse true ou false pode ser representado de algumas formas, como por exemplo em forma de números, o 1 é interpretado como 'true';
console.log(!!isAtivo) // O usso de exclamações, (!!), verificar se o valor que as sucede é verdadeiro ou falso;

/**
 * Uma '!' inverte o valor sucessor, enquato duas '!!' retornam ao valor original;
 */

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
// Todos os números inteiros são verdadeiros;
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Não é retornando se a atribuição deu certo, mas sim, se o valor atribuido for resolvido para true;
// Sendo assim, se atribuirmos algum dos valores anteriores, irá dar 'true';

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Funciona da mesma forma que o verdadeiro, só que com valores que resultam em false;

console.log("Para finalizar...")
console.log(!!('' || null || 0 || ' ')) // Retorna verdadeiro porque pelo menos uma das condições foi atendida; Nesse caso estamos fazendo uso do operador lógico (ou), que é representado por duas barras (||);
console.log(!!('' || null || 0 || NaN))

/**
 * Esse último exemplo é muito interessante pois mostra uma utilização do operador (ou) - (||)
 * Esse operador é muito utilizado, dentre muitas situações, para dar um valor padrão para uma determinada variável...;
 * Caso exista um valor na variável, caso não seja uma string vazia, é imprimido o valor da variável, caso não, é imprimido "Desconhecido";
 * Em outras palavras, caso não tenha nada na variável, imprima por padrão 'Desconhecido';
 */

let nome = ''
console.log(nome || 'Desconhecido')
