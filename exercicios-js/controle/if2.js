function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')

}

// teste1(10)
teste1(11)

function teste2(num) {
    if (num > 7); { // Como foi colocado o ';' uma sentença vazia foi criada, sendo assim, o console.log() não está associado ao if, executando sempre.
        console.log(num)
    }
}

/**
 * O código acima está errado, devo tomar cuidado com ';' em estruturas de controle.
 */

teste2(6)
teste2(8)