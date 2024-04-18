let cadastrar = ''
let continuar = true;
let maiorNotaHomem = 0
let homens = 0
let mulheresAcimaDe7 = 0
let totalNotas = 0
let alunos = 0

while(continuar) {
    sexo = prompt("Sexo:[m/f]")
    nota = Number(prompt("Nota: "))
    cadastrar = prompt("Quer cadastrar mais um aluno?")

    totalNotas += nota

    if (sexo==='m'){
        homens++
        maiorNotaHomem = (nota>maiorNotaHomem?nota:maiorNotaHomem)
    } else {
        mulheresAcimaDe7 = (nota>7?mulheresAcimaDe7+1:mulheresAcimaDe7)
    }
 
    alunos++
    continuar = (cadastrar==='sim'?true:false)
}
mediaGeral = (totalNotas/alunos)

document.write("Paciais!<br>Você cadastrou:<br>")
document.write(`Alunos cadastrados: ${alunos}<br>`)
document.write(`Mulheres com nota > 7: ${mulheresAcimaDe7}<br>`)
document.write(`Homens Cadastrados: ${homens}<br>`)
document.write(`Maior nota entre homens: ${maiorNotaHomem}<br>`)