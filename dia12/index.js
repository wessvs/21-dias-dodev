let nomes = []
let senhas = []
let continuar = true
let i = 0
do {
    let escolha = Number(prompt("O que deseja fazer?1- Cadastrar; 2- Login; 3- Excluir; 4-Encerrar"))
    switch(escolha){
        case 1:
            nomes[i] = prompt("Nome:")
            senhas[i] = prompt("Senha")
            document.write(`Você cadastrou ${nomes[i]} com sucesso!`)
            break

        case 2:
            let nome = prompt("username:")
            for(let idx=0;idx<nomes.length;idx++){
                if(nomes[idx]===nome){
                 let senha = prompt("senha:")
                 if(senha === senhas[idx]){
                    alert(`Seja bem vindo! ${nomes[idx]}`)
                    break
                 } else {
                    alert("Senha inválida. Tentar novamentE?")
                    break  
                 }   
                }
            }

        case 3:
            user = prompt("username:")
            for(idx = 0; idx<nomes.length;idx++){
                if(nomes[idx]===user){
                    nomes.splice(idx, 1)
                    senhas.splice(idx, 1)
                    alert(`user ${user} excluído com sucesso!`)
                    nomes = nomes.filter(function(e) {
                        return e.trim() !== "";
                    })
                    senhas = senhas.filter(function(e) {
                        return e.trim() !== "";
                    })
                    break
                } else {
                    alert("Não há usuário com esse nome...")
                }
            } break

        case 4:
            continuar=false
            break    
    }
    if(continuar){
    continuar = confirm("Deseja continuar?")
   i++}
} while(continuar)

document.write(nomes)
document.write(senhas)
