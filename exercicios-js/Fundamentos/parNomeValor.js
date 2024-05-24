// Objetos são grupos aninhados de pares chave/valor
const saudacao = "Olá" // Contexto léxico 1 (Contexto em que esse conjunto chave e valor foi definido);

function exec () {
    const saudacao = "Opa" // Contexto léxico 2; A constante foi definida nesse contexto da função;
    return saudacao;
}

/**
 * Os nomes das variáveis são os mesmos, mas como elas estão em contextos diferentes elas podem coexistir;
 * Caso não tivesse uma variável chamada saudacao no contexto da função, o programa iria procurar em contextos superiores, que no caso, seria fora da função, encontraria então a outra variável
 * que foi declarada;
 * Se ele não achar em nenhum dos contextos, então informa que a variável não foi declarada;
 */

const cliente = {
    nome: "José",
    idade: 20,
    endereco: {
        logradouro: "Rua php",
        numero: 404
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)