function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) /* Amarrei ao objeto com a função bind(). Por já estár sendo executada dentro do objeto pessoa, o this já aponta para quem eu quero, que é Pessoa. */
}

// new Pessoa

/**
 * Foi gerado um erro, pois quem está invocando essa função é um temporizador, e não o objeto Pessoa."
 */

// Outra solução:
function Pessoa02() {
    this.idade = 0

    const self = this // Como a linha 20 está sendo executada diretamente dentro da função pessoa, nessa linha o this é o objeto que eu quero de fato apontar.
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)

}

new Pessoa02