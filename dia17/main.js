//      - Um hotel deve possuir: id, nome, categoria, endereço e telefone;
//      - Uma reserva deve possuir: id, id do hotel, nome do responsável, dia de entrada e dia de saída;

/////////////////////////////////////////////////////////////////////////////
// Criando classes

class Hotel {
    id 
    nome
    categoria
    endereco
    telefone

    constructor(nome, categoria, endereco, telefone) {
        this.nome = nome
        this.categoria = categoria
        this.endereco = endereco
        this.telefone = telefone
    }
}

class Reserva {
    id
    idHotel
    nomeResponsavel
    diaEntrada
    diaSaida

    constructor( idHotel, nomeResponsavel, diaEntrada, diaSaida) {
        this.idHotel = idHotel;
        this.nomeResponsavel = nomeResponsavel;
        this.diaEntrada = diaEntrada;
        this.diaSaida = diaSaida;
    }
}

// Criando Arrays
let hoteis = []
let reservas = []

function cadastrarHotel() {
    // let id = prompt("Digite o id do hotel: ")
    let nome = prompt("Digite o nome do hotel: ")
    let categoria = prompt("Digite a categoria do hotel:")
    let endereco = prompt("Digite o endereço do hotel: ")
    let telefone = prompt("Digite o telefone do hotel: ")

    let hotel = new Hotel(nome, categoria, endereco, telefone)

    hoteis.push(hotel)

    hotel.id = hoteis.indexOf(hotel)
    alert(`Hotel ${hotel.id} cadastrado com sucesso!`)
    return hotel
}

function cadastrarReserva() {

        idHotel = parseInt(prompt('Digite o ID do hotel:'))
        while(idHotel < 0 || idHotel >= hoteis.length){
            alert('ID inválido')
            idHotel = parseInt(prompt('Digite o ID do hotel:'))
        }

    nomeResponsavel = prompt('Digite o nome do reponsável:')

    do{
        diaEntrada = parseInt(prompt('Digite o dia de entrada:'))
    } while(diaEntrada < 0 || diaEntrada > 31)
    diaSaida = parseInt(prompt('Digite o dia de saida:'))

     while (diaSaida <= diaEntrada){
        alert('Dia de saida não pode ser menor que o dia de entrada')
        diaSaida = parseFloat(prompt('Dia de saida: '))
     }

    let reserva = new Reserva(idHotel, nomeResponsavel, diaEntrada, diaSaida)
    reservas.push(reserva)
    reserva.id = reservas.indexOf(reserva)
    alert(`Reserva ${reserva.id} cadastrada com sucesso!`)

    return reserva
}

function buscaHotel(_id_hotel) {
    if(hoteis[_id_hotel] != undefined) {
        alert(`Hotel: ${hoteis[_id_hotel].nome}`)
        let reservas_hotel = reservas.filter(reserva => reserva.idHotel == _id_hotel)
        if (reservas_hotel.length > 0) {
            alert(`Reservas: ${reservas_hotel.length}`)
            reservas_hotel.forEach(reserva => {
                alert(`Reserva ${reserva.id}: ${reserva.nomeResponsavel} - dia ${reserva.diaEntrada} até ${reserva.diaSaida}. `)
            })} else {
            alert('Não há reservas para esse hotel')
        }
    } else {
        alert('Nenhum hotel com esse ID')
    }
}

function buscaReserva(_id_reserva) {
    if (reservas.some(x => x.id == _id_reserva)){

        let reserva = reservas.find((x) => x.id == _id_reserva)
        let id_hotel = reserva.idHotel
        let hotel = hoteis[id_hotel]
        
        alert(`Reserva: ${reserva.id},\n ID do hotel: ${reserva.idHotel};\nEndereço: ${hotel.endereco};\n Estadia: ${reserva.diaEntrada} até ${reserva.diaSaida}.`)

    } else {
        alert("Não há reserva com esse ID.")
    }
}

function buscaPessoa(_nome_pessoa) {
    if (reservas.some((x) => x.nomeResponsavel == _nome_pessoa)) {
        alert('Existe')
        let reservas_ativas = reservas.filter(x => x.nomeResponsavel == _nome_pessoa)
        reservas_ativas.forEach(x => alert(x))
    } else {
        alert('Nome de hóspede não encontrado.')
    }
}

function buscaCategoria(_categoria) {
    if (hoteis.some(x => x.categoria == _categoria)) {
        alert('há hoteis nessa categoria.')

        resultado = hoteis.filter(x => x.categoria == _categoria)
        resultado.forEach(x => alert(x))
        return resultado
    } else {
        alert('Não há hoteis nessa categoria.')
    }
}

function atualizaTelefone(_id_hotel, _telefone) {
    if(_id_hotel < hoteis.length){
        let hotel_retornado = hoteis[_id_hotel]
    hotel_retornado.telefone = _telefone
    alert('Telefone atualizado com sucesso.')
    alert(hotel_retornado)
    } else {
        alert('ID inválido.')
    }
}

function tipoBusca(_opt) {
    switch(_opt) {
        case '1':
            let _id_ = parseInt(prompt('qual o id do hotel?'))
            buscaHotel(_id_)
            break
        case '2':
            let _reserva_ = parseInt(prompt('ID da reserva: '))
            buscaReserva(_reserva_)
            break
        case '3':
            let _pessoa_ = prompt("Nome")
            buscaPessoa(_pessoa_)
            break
        case '4':
            let _categoria_ = prompt("Categoria")
            buscaCategoria(_categoria_)
            break
        default:
            alert("Opção inválida!")
            break
    }
}

function menu_options() {
    let escolha = prompt('Digite a opção desejada: 1)Cadastrar hotel; 2)Cadastrar Reserva; 3) Buscar; 4) Atualizar telefone; 5) Sair')

    switch(escolha) {
        case '1':
            cadastrarHotel()
            break
        case '2':
            cadastrarReserva()
            break
        case '3':
            let buscar = prompt('Deseja buscar por: 1)Hotel; 2)Reserva; 3) Pessoa; 4) Categoria;')
            tipoBusca(buscar)
            break
        case '4':
            let _id_ = prompt("Digite o id do hotel")
            let _novo_telefone = prompt("Digite o novo telefone")
            atualizaTelefone(_id_, _novo_telefone)
            break
        case '5':
            continuar = false
            alert('Obrigado por consultar!')
            break
    }
    
}

let continuar = true

while(continuar) {
    menu_options()
}


// Texting setup

// hotel1 = new Hotel('Moema', 'airbnb', 'Tv. da Liberdade', '11944565042', id=0)
// hotel2 = new Hotel('augusta22', 'hotel', 'Av. Paulista', '1150502244', id=1)

// hoteis.push(hotel1, hotel2)
// hoteis[0].id = 0
// hoteis[1].id = 1


// reserva401 = new Reserva(401, 0, "Wessley", "13/12", "15/12")
// reserva402 = new Reserva(402, 1, "Bea", "05/09", "15/09")
// reserva403 = new Reserva(403, 1, "Alysson", "05/01", "15/02")
// reserva404 = new Reserva(404, 1, "Wessley", "12/11", "15/12")


// reservas.push(reserva401, reserva402, reserva403, reserva404)

// // alert("Hoteis ", hoteis)
// // alert("Reservas ", reservas)

// let teste_hotel = 0
// let teste_reserva = 401
// let teste_pessoa = 'Wessley'
// let teste_pessoa_errada = 'Jose'
// let teste_categoria = 'airbnb'
// let teste_categoria_errada = 'sala'

// // buscaHotel(teste_hotel)
// // buscaReserva(teste_reserva)

// // buscaPessoa(teste_pessoa)
// // buscaPessoa(teste_pessoa_errada)

// // buscaCategoria(teste_categoria)
// // buscaCategoria(teste_categoria_errada)

// atualizaTelefone(3, '1150502222')