let num1 = Number(prompt("DIGITE UM NUMERO"))
let num2 = Number(prompt("DIGITE UM NUMERO"))
let opcao = prompt("Operação: + _ / *")
switch(opcao) {
    case "+":
        console.log(`${num1}+${num2} = ${num1 + num2}`)
        break
    case "-":
        console.log(`${num1}-${num2} = ${num1 - num2}`)
        break
    case "/":
        console.log(`${num1}/${num2} = ${num1 / num2}`)
        break
    case "*":
        console.log(`${num1}*${num2} = ${num1 * num2}`)
        break
    default:
        console.log("[Opção inválida]")
        break
}

