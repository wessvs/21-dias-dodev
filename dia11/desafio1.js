let nomes = [];
let notas = [];
let i=0
let soma = 0
let media = 0
do{

    nomes[i] = prompt("Nome:")
    notas[i] = Number(prompt("Nota: "))
    continuar = confirm("Deseja continuar? ")

    soma += notas[i]
    i++
} while(continuar)

media = soma/notas.length

for(let aluno = 0; aluno < nomes.length; aluno++) {
    document.write(`Aluno: ${nomes[aluno]} = ${notas[aluno]}`)
}
document.write(`Soma: ${soma}<br>Media: ${media}`)