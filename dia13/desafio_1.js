class Computador {
    tipo
    processador
    video
    armazenamento
    MemoriaRam
    SSD

    constructor(tipo, processador, video, 
        armazenamento, MemoriaRam, ssd) {
            this.tipo = tipo;
            this.processador = processador;
            this.video = video;
            this.armazenamento = armazenamento;
            this.MemoriaRam = MemoriaRam;
            this.ssd = ssd;
    }

    
    exibir(){
        console.log(`Tipo: ${this.tipo};`)
        console.log(`Processador: ${this.processador};`)
        console.log(`Vídeo: ${this.video} GB.`)
        console.log(`Armazenamento: ${this.armazenamento} GB;`)
        console.log(`Memoria RAM: ${this.MemoriaRam} GB;`)
        console.log(`SSD: ${SSD}GB.`)

    }
}



let myComputer = new Computador('Desktop', 'AMD Ryzen', '', '16GB', '4GB', '200GB')

