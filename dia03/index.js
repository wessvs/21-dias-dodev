let nome = prompt("Nome:")
let idade = parseInt(prompt("Idade:"))
let altura = parseFloat(prompt("Altura:"))
let peso = parseFloat(prompt("Peso:"))
let anoAtual = 2024
let anoNascimento = anoAtual - idade


let imc = peso/(altura**2)
console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNascimento}, tem ${altura} de altura, pesa ${peso}kg seu IMC é ${imc}Kg/m2`)
