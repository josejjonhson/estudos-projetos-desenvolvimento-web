/**
 * Operadores lógicos;
 */

function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // Ao omitira a chave o nome da constante informada já se torna o nome da chave; 
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))



