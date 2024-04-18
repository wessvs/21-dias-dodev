let nome, idade, confirma

let salarioAtual = 0
do{
    //  nome = prompt("Nome:")
    //  idade = Number(prompt("Idade:"))
    salarioAtual = Number(prompt("Salário Atual:"))

    document.write(`Nome: ${nome}<br>Idade:${idade}<br>Salário Atual:R$ ${(salarioAtual)}<br>`)

    confirma =(prompt("Confirma os dados?") === "sim"?true:false)
    
}while(!confirma)

let percentualAumento

let aumento = 0.015
document.write("Previsão salarial para os próximos 10 anos:<br>")
for(let ano = 1; ano <= 10; ano++) {

    salarioAtual += salarioAtual * aumento
    aumento *= 2

    document.write(`${2023 + ano} = R$${salarioAtual.toFixed(2)}; <br>`)
}










// for(let i=2023;i<(i+10);i++) {
//     if (i == 2023) {
//         salario += aumento
//         percentualAumento = 15
//         aumento = (percentualAumento/100) * salario
//         document.write(`<br>${i}: aumento de R$${aumento}(+${percentualAumento}%) - Salário: ${salario}`)
//     } else {
//         percentualAumento *= 2
//         aumento = percentualAumento * salario
//         document.write(`<br>${i}: aumento de R$${aumento}(+${percentualAumento*100}%) - Salário: ${salario}`)

//     }
// }