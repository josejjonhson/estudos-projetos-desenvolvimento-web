/**
 * Função mostrando que o retorno não é obrigatório.
 * Em um caminho da minha função eu tenho um console.log(), enquanto no outro eu tenho um return.
 */
function area(largura, altura) {
    const area = largura * altura 
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 2, 2, 4))
console.log(area(5, 5))