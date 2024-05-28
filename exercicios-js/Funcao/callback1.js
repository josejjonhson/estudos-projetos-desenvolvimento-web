// A ideia de callback é passar uma fução para outra função, e quando um determinado evento acontecer essa função passada e disparada.

const fabricantes = ['Mercedes', 'Audi', "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
// fabricantes.forEach(function(fabricante) {
//     console.log(fabricante)
// })

// Transformando numa função arrow
fabricantes.forEach(fabricante => console.log(fabricante))