// exercicio 01

// let numeros = [];

// for(let i = 0; i <3; i++) {
//     let inteiro = Number(prompt("Numero:"))
//     numeros[i] = inteiro
// }

// for(let i = 0; i < numeros.length; i++) {
//     console.log(`${i} = ${numeros[i]}`)
// }

// exercicio 02 e 03

// let numeros = []
// let numerosInverso = []
// let quantidade = Number(prompt("Quantos num deseja add?")) 
// for(let i = 0; i < quantidade; i++) {
//     let inteiro = Number(prompt("Numero:"))
//     numeros[i] = inteiro
//     numerosInverso[(quantidade-1)-i] = inteiro
// }

// console.log(numeros)
// console.log(numerosInverso)

// exercicio 04



let fibonacci = [];

for(let i = 0; i<10;i++) {
    if (i === 0) {
        let numero = Number(prompt("Numero:"))
        fibonacci[i] =  numero - 1
    } else if(i === 1) {
        fibonacci[i] = fibonacci[i-1] + 1
    } else {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
    }

}

console.log(fibonacci)