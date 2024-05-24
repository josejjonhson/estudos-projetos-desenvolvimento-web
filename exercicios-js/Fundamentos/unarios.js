let num1 = 1
let num2 = 2

num1++ // Acrescenta uma unidade ao valor da variável; Forma pós fixada;
console.log(num1)
--num1 // Forma pré fixada; Tem maior prioridade;
console.log(num1)

console.log(++num1 === num2--) // Resulta em true;
console.log(num1 === num2)