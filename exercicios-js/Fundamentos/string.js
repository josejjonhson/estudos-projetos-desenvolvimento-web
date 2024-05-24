// A string é uma cadeia de caracteres. Ela pode ser delimitada de três formas:
// '' "" `` Aspas simples, aspas duplas, e crase

const meuNome = "Jose Jonhson"

console.log(meuNome.charAt(3)) // Retorna o caractere que está no índice que informei;
console.log(meuNome.charCodeAt(3)) // Retorna o valor da tabela ASCII referente ao caractere em questão que corresponde ao índice informado;

console.log(meuNome.indexOf('J'))
/**
 * O indexOf retorna o índice do caractere informado, na palavra;
 * Caso exista mais de um caracter igual a função retorna o índice da primeira ocorrência dele;
 */

console.log(meuNome.substring(5)) // Isona do índice 5 para frente;
console.log(meuNome.substring(0, 3)) // Isola do índice 0 até o 2;

console.log('Meu nome é '.concat(meuNome).concat('!'))
console.log("Meu nome é " + meuNome + "!")
console.log(meuNome.replace(1, "@")) // Por algum motivo essa função não está funcionando no meu computador, se eu descobrir o erro atualizo aqui;
console.log(meuNome.replace(/\w/g, '@')) // Isso é uma Expressão regular:

/**
 * Em ciência da computação, uma expressão regular provê uma forma concisa e flexível de identificar cadeias 
 * de caracteres de interesse, como caracteres particulares, palavras ou padrões de caracteres.
 */

// Converter uma string separada por virgula, em um array
console.log('João, Maria, Mateus, Lucas'.split(','))

// Usando expressão regular fica assim:
console.log('João, Maria, Mateus, Lucas'.split(/,/))
