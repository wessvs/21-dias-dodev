class Carro {
    nome 
    potencia
    velocidadeMaxima
    aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.aceleracao = aceleracao;
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    calculador(distanciaMetros) {
        let resultado = distanciaMetros / (this.velocidadeMaxima / this.aceleracao)
        return resultado
    }
}

class Corrida {
    nome
    tipo
    distancia
    participantes
    vencedor 

    constructor(nome, tipo, distancia, participantes) {
        this.nome = nome;
        this.tipo = tipo;
        this.distancia = distancia;
        this.participantes = participantes;
    }

    menorTempo(participantes) {
        let menorTempo, nomeMenorTempo
        for(let i = 0; i < participantes.length;i++){
            if (i==0) 
            {
                menorTempo = participantes[i].calculador(this.distancia);
                nomeMenorTempo = participantes[i].nome
            } else if (menorTempo > participantes[i].calculador(this.distancia)) 
                {   
                    menorTempo = participantes[i].calculador(this.distancia)
                    nomeMenorTempo = participantes[i].nome
                }       
        }

        return nomeMenorTempo

    }

    exibeVencedor()
 {    
    console.log(`O vencedor da corrida foi ${this.vencedor}!`)
    }

}

// instancia participantes

let ferrari = new Carro ("Ferrari", 3000, 360, 9);
let porsche = new Carro ("Porshe", 500, 280, 10);

let fusca = new Carro('Fusca', 100, 120, 15);

let participantes = [porsche, ferrari, fusca]


// mostra na tela
for(let i=0; i<participantes.length; i++) {  
    console.log(`A quantidade de tempo que um ${participantes[i].nome} levará para percorrer 360 metros em um carro de ${participantes[i].velocidadeMaxima}km/h, com a potência de ${participantes[i].potencia} cavalos é de ${participantes[i].aceleracao} aceleração por segundos.`)
}
// instacia corrida, calcula vencedor e exibe na tela
let autodromoInterlagos = new Corrida('Interlagos', 'F1', 40000, participantes)

autodromoInterlagos.vencedor = autodromoInterlagos.menorTempo(participantes)

autodromoInterlagos.exibeVencedor()

