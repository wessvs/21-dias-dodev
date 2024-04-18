let modelos = [];
let anos = [];
let valores = [];
let i = 0

do {
    modelos[i] = prompt("Modelo:")
    anos[i] = Number(prompt("Ano:"))
    valores[i] = Number(prompt("Valor: R$"))

    for(let index = valores.length - 1; index >= 0; index--) {

    }

    continuar = confirm("Continue? ")
    i++
} while(continuar)

for(let idx = 0; idx < modelos.length; idx++){
    document.write(`${idx} - ${modelos[idx]} - ${anos[idx]} - R$${valores[idx]},00 <br>`)
}

let novaOrdemModels = [];
let novaOrdemYears = [];
let novaOrdemValues = [];

for(i= 0; i < valores.length; i++) {

}

