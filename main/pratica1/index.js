const {addContact,  listContacts, removeContact, updateContact, lastId, findContactById } = require('././controller/controller');
const readline = require('readline-sync');


function menu(){
    console.log(`

       1. Adicionar Contato
       2. Listar Contatos
       3. Buscar Contato
       4. Atulizar Contato
       5. Remover Contato
       6. Sair

      `);
}
 function chooseOption (option){

    switch(option){
        case '1':
        const name = readline.question('Nome do Contato, por gentileza');
        const email = readline.question('E-mail do Contato, por gentileza');
        const telephone = readline.question('Número do Contato, por gentileza');
        addContact()
        break;
        
        case '2':
        listContacts()
        break;
        
        case '3':
        const seachId =  readline.question('Qual o ID do usuario');
        findContactById(parseInt(seachId));
        break;

        case '4':
        const updateId = readline.question(`ID do usuário para atualização`);
        const updatedName = readline.question(`Novo nome de usuário(deixar em branco se não mudar)`);;
        const updateEmail = readline.question(`Novo E-mail(deixar em branco se não mudar)`);
        const updatedTelephone =  readline.question(`Novo número: (se nao mudar, deixar em branco)`);

        break;

        case '5':
        
        break;

        case '6':
        
        break;

        default:
        




    }

 }
1