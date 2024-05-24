/**
 * Entendendo o conceito de 'hoisting';
 * Traduzido temos algo como "Içar", "Jogar para cima";
 */

console.log('a antes da declaração = ', a)
var a = 2
console.log('a depois da declaração = ', a)

/**
 * Não foi gerado um erro. Mesmo que tenhamos tentado imprimir uma variável antes mesmo de declararmos ela, tendo em vista que a leitura do código acontece de cima para baixo linha por linha;
 * É dito, no console.log() que vem antes da declaração, que a variável é "undefined", más existe. E depois colocou o valor 2 na variável;
 * 
 * O que aconteceu foi o seguinte:
 * 
 * var a 
 * console.log('a antes da declaração = ', a)
 * a = 2
 * console.log('a depois da declaração = ', a)
 * 
 * Se copiarmos o código acima a saída é a mesma, porque implicitamente foi isso mesmo que aconteceu. Isso é o hoisting;
 * 
 * Não tem motivo para usar isso como estratégia para algo, deve ser evitado;
 * Devemos buscar sempre declarar nossas variáveis antes de usar;
 * 
 */

// Outro exemplo mostrando que mesmo dentro da função essa variável sofre o hoisting;
function teste() {
    console.log('a antes da declaração = ', a)
    var a = 2
    console.log('a depois da declaração = ', a)
}

teste()

// Quando utilizamos o let na declaração de variáveis o efeito de içamento, o hoisting, não ocorre;
