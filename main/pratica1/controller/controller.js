const Contatos = require ('../modelo');
let ultimoId = 0;
const contatos = [];

function adicionarContato(name, email, telephone){
    ultimoId++
    const novoContato =  new Contatos(ultimoId, name,email, telephone);
    contatos.push(novoContato)
}

function listarContatos(){
    if (contatos.length > 0){
        console.log(`Lista de Contatos`);
        contatos.forEach((contato, index) => {
         console.log(`ID ${contato.id}. Nome: ${contato.name} , email: ${contato.email},  numero: ${contato.telephone}`)
 
        });
    }else{
        console.log(`nao ha contatos`)
        return null;

    }
}
     function buscarId(id){
        const contato = contatos.find(contato => contato.id === id);
        if(contato){
            console.log(`Contato encontrado: id: ${contato.id}, nome: ${contato.name} e email: ${contato.email}`)
            return contato;

        }else{
            console.log('contato nao encontrado')
            return null;
        }
     }
     function atualizarContato(id, name, email, telephone){
        const index = contatos.findIndex(contato => contato.id === id);
        if(index !== -1){
            contatos[index].name = name;
            contatos[index].email = email;
            contatos[index].telephone = telephone;
            console.log(`contato atualizado`)

        } else{
            console.log(`contato nao encontrado`)
        }     
       }

       function removerContato(id){
        const index = contatos.findIndex(contatos => contatos.id === id)
        if(index !== -1){
            contatos.splice(index, 1);
            console.log(`copntato com ID ${id} foi removido da lista de contatos`);
            }else{
                console.log(`contato nao encontrado`)
            }

       }





adicionarContato('Daniel', 'email@email.com', '99369936');
adicionarContato('Ana', 'ana@email.com', '93939393');
listarContatos()
buscarId(1)
atualizarContato(1,'daniel','email@email.com','94949494')
listarContatos()
removerContato(1)
listarContatos()
 