const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()

/**
 * Esse é um problema clássico do javascript relacionado ao escopo de variáveis declaradas com var dentro de loops. 
 * Esse comportamento ocorre porque var não tem escopo de bloco, apenas escopo de função, o que faz com que todas as funções no array funcs compartilhem a mesma variável i.
 */