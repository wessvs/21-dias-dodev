let saldo = 100
let nome = prompt("Nome:")
let CPF = prompt("CPF: ")
let maiorValor = 0
let totalMovimentado = 0
let operacoesRealizadas = 0
let valor = 0
let operacao = ''
alert(`Seja bem vindo ${nome}!`)
do{
    valor = Number(prompt("Valor: R$"))
    if (valor <0) {
        console.log(`INSIRA UM VALOR VÁLIDO`)
    } else{
        maiorValor = (valor>maiorValor?valor:maiorValor)
    operacao = prompt("Operação: 0-saque \n 1-deposito?")

    if(operacao==="0"){
        if(valor<=saldo){
            saldo -= valor
            console.log(`Você sacou: R${valor},00`)
            operacoesRealizadas++
            totalMovimentado += valor

        } else{
            console.log("Saldo insuficiente!")
        }
    } else {
        saldo += valor
        console.log(`Você depositou> R$${valor},00!`)
        operacoesRealizadas++
        totalMovimentado += valor

    }
}
    

    console.log(`------------------`)
    console.log(`Saldo atual:${saldo}`)
    console.log(`Maior valor inserido: ${maiorValor}`)
    console.log(`Media valor inserido: ${(totalMovimentado/operacoesRealizadas)}`)
    console.log(`------------------`)

    continuar = (prompt("Continuar?[s/n]") === 's'? true: false)
}
 while(continuar)
