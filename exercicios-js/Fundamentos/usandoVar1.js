{
    {
        { 
            var sera = 'Será???' 
        }
    }
}
console.log(sera)

/**
 * A variável declarada com o 'var' ficará visivel mesmo para aqueles que não estejam dentro do bloco em que ela foi declarada
 */

// OBS:. Quando uma variável é criada fora de uma função, o escopo dela é global.

function teste() {
    var local = 123
    console.log(local)
}
teste()
console.log(local)

/**
 * Já no exemplo acima temos uma variável no escopo de função, não podendo ser acessada fora da função na qual foi declarada.
 */