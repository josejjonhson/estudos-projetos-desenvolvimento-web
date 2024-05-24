console.log(7 / 0) // Essa operação é infinita, no js temos um tipo para isso o "infinity";

console.log("10" / 2) // Se o valor numerico da string for conhecido para o js, ele converte e realiza a operação;

console.log("3" + 2) // Nesse caso a string tem preferência, então o resultado será 32;
// Isso ocorre pelo fato do operador "+" fazer sentido no contexto de strings, uma vez que ele é utilizado para concatenação;

console.log(0.1 + 0.7) // Não resulta examente em 0.8 por conta da especificação que é seguida por algumas linguagens de programação;

//console.log(10.toString()) "forma errada";
console.log((10.231312).toFixed(2)) // Forma certa;

console.log("Olá" * 10) // Gera um NaN "Not a Number"