console.log('01)', '1' == 1) // Operador binário; Compara o valor sem se preocupar com o tipo;
console.log('02)', '1' === 1) // Comparando o tipo e o valor;
console.log('03)', '3' != 3)
console.log('03)', '3' !== 3) // Comparando o tipo e o valor;

console.log('05)', '3' < 2)
console.log('06)', '3' > 2)
console.log('07)', '3' <= 2)
console.log('08)', '3' >= 2)

const d1 = new Date(0) // Data de referência do javascript
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)

/**
 * Quando trabalhamos com uma variável de referência não faz diferença se utilizamos o == ou ===,
 * uma vez que estamos comparando endereço de momória;
 */

console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

// É melhor que se utilize o === para não ocorrer a mistura de tipos;