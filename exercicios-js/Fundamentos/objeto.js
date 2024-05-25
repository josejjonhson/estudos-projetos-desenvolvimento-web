const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 5000.99
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa preta',
    preco: 79.90
}

console.log(prod2)

// Exemplo JSON
'{ "nome": "Camisa Preta", "preco": 79.90 }' // json é um formato textual. É uma forma de trocar dados entre sistemas;