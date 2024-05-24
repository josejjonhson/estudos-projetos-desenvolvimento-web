const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()

/**
 * Com a utilização do let nós vemos que o cenário muda, ele respeita o valor de i em cada índice que é chamado.
 * Para cada repetição existe a memoria que "A função 2 aponta para o i = 2", e "A função 8 aponta para i = 8"
 * Isso pelo fato de variáveis let terem escopo de bloco.   
 */

// OBS:. Uma função tem conciência do local em que ela foi declarada, esse conceito se chama "closure", e se dá quando uma função "lembra" o ambiente em que foi criada, mesmo depois que esse ambiente deixou de existir. 