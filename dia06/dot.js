// conta de 0 ao numero escolhido
let inteiro = Number(prompt("Type an integer number: "))

for(let cont = 0; cont <= inteiro; cont++) {
    document.write(cont + "<br>")
}

// 0 a 50 de 5 em 5;

for(let cont = 0; cont <= 50; cont+=5) {
    document.write(cont + "<br>");
}

// mesmo anterior, ao contrário

for(let i = 50; i >= 0; i -= 5) {
    document.write(`${i} <br>`);
}