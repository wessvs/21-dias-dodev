let abastecerCom = prompt("Quer abastacer com gasolina, álcool ou calibrar?")

switch(abastecerCom) {
    case "gasolina":
        let valor = parseFloat(prompt("Quanto: R$"))
        console.log(`Abastecido: ${valor/5} litros`)
        break
    case "alcool":
        let valora = parseFloat(prompt("Quanto: R$"))
        console.log(`Abastecido: ${valora/3} litros`)
        break
    case "calibrar":
        console.log("pneus calibrados com sucesso")
        break   
    default:
        console.log("Opção Inválida!")
        break}