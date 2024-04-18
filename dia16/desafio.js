let continuar = true

function options() {
    let opt = prompt("1- Cadastrar;2- Login, 3- Excluir; 4- Encerrar?")

    return opt
}

let nomes = []
let senhas = []



function cadastro() {
    let nome = prompt('Nome:')
    let senha = prompt('Senha')

   nomes.push(nome)
   senhas.push(senha)

   alert("Usuário cadastrado com sucesso!")
}

function login(nickname, password) {
    if (nomes.includes(nickname)) {
        let indice = nomes.indexOf(nickname)
        if(senhas.includes(password)) {
            alert('Login feito com sucesso!')
            return true
        } else {
            alert('Nome ou senha incorretos!')
            return false
        }
    } else {
        alert('Nome ou senha incorretos!')
        return false
    }
}

function excluir(nome) {
    if (nomes.includes(nome)) {
        let indice = nomes.indexOf(nome)
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        alert('Usuário excluído com sucesso!')
    } else {
        alert("Nenhum user com esse nome.")
    }
}

while (continuar) {
    let opt = options()

    switch (opt) {
        case "1":
            cadastro()
            break
        case '2':
            let username = prompt('Nome:')
            let password = prompt('Senha')
            login(username, password)
            break
        case '3':
            let usuario = prompt('Qual user deseja excluir?')
            excluir(usuario)
            break
        case '4':
            continuar = false
            break
    }
}
