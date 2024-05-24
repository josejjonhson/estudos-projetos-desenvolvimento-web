const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// Saber se o valor é ou não um inteiro 
console.log(Number.isInteger(peso1)) // Se fosse 1.1 daria false
console.log(Number.isInteger(peso2)) // Se fosse 2.1 daria false

// No js o tipo number serve tando para inteiros quanto para decimais;

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Usamos o toFixed() para ter o controle da quantidade de casas decimais que vão ser exibidas;
console.log(media.toString(2)) // Usando o toString() com o argumento 2, convertemos o ponto flutuante para binário;
console.log(typeof(media))

console.log(typeof Number) // O "Number" é uma função, já o "number" é o tipo do dado quando temos um valor numerico;