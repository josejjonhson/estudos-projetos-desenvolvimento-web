/**
 * O this dentro de uma função arrow é fixo. Ele é baseado no contexto no qual a função foi escrita.
 * Não é influenciado pelo fato da função ter sido chamada de locais diferentes.
 */

// function pessoa() {
//     this.idade = 0

//     const self = this
//     setInterval(function() {
//         self.idade++
//         console.log(self.idade)

//     }, 1000)
// }

// Vamos reescrever essa função só que utilizando arrow function.

function pessoa() {
    this.idade = 0

    setInterval(() => { // Chamada literal da função arrow.
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa