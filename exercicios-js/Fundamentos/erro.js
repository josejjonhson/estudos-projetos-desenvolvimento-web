function tratarErroELancar (erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Texto'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date 
    }
}

function imprimirNomeGritado (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error) 
    } finally { // Executado independente de ter um problema ou não;
        console.log('final')
    }
}

const obj = { nome: 'José Jonhson' }
imprimirNomeGritado(obj)

// OBS:. Evitar para mostrar para o usuário detalhes de infraestrutura;
// Não jogar o erro cru na cara do user;    