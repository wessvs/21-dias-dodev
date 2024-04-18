let continuar
do{
    function converteIdade(idade) {
        idade = Number(idade)
        let dias = idade * 365
        let semana = Math.round(dias/7)
        let mes = idade * 12
        let nasceuEm = 2023 - idade 
    
        return `<br>Idade: ${idade} anos;<br>Meses: ${mes};<br>Semanas: ${semana};<br>Dias: ${dias}`
    }
    
    function calculaImc(altura, peso) {
        let imc = peso/(altura**2)
        let faixa
    
        if(imc < 18.5){
            faixa = 'magreza'
        } else if(imc < 24.9){
            faixa = 'normal'
        }else if(imc < 30){
            faixa = "sobrepeso"
        } else {
            faixa = "obesidade"
        }
    
        return ` <br>Imc: ${imc}kg/m²;<br>Faixa IMC: ${faixa}`
    }
    

    let nome = prompt("Nome:")
    let idade = Number(prompt("Idade:"))
    let nasceuEm = 2023 - idade 
    let altura = Math.round(Number(prompt("Altura:")))
    let peso = Math.round(Number(prompt("Peso:")))
    let profissao = (prompt("Profissão:"))
    let conversoes = converteIdade(idade)
    let maiorIdade = (idade >= 18? true:false)
    let resultIMC = calculaImc(altura, peso)

    document.write(`Nome: ${nome};<br>Profissão: ${profissao};<br>Altura:${altura};<br>Peso: ${peso}kg.`)

    switch(maiorIdade){
        case true:            
            document.write("<br>Está liberado para tomar umas geladas!")
            break
        case false:
            document.write("<br>Sem geladas para você!")
            break
    }

    document.write(conversoes)
    document.write(resultIMC)

    for(i=nasceuEm;i <= 2023; i++) {
        document.write(`<br> ${i} = ${i-nasceuEm} anos de idade`)
    }

    let desejaContinuar = prompt("Deseja continuar?[s/n]")

    continuar = (desejaContinuar === "s"? true:false)

    document.write("<br>--------------------------------------------------------<br>")
} while(continuar)