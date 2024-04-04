const {
    addContact,
    listContacts,
    removeContact,
    updateContact,
    findContactById
} = require('./controller/controller');
const readline = require('readline-sync');

function menu() {
    console.log(`
       1. Adicionar Contato
       2. Listar Contatos
       3. Buscar Contato
       4. Atualizar Contato
       5. Remover Contato
       6. Sair
    `);
}

function chooseOption(option) {
    switch (option) {
        case '1': {
            const name = readline.question('Nome do Contato, por gentileza: ');
            const email = readline.question('E-mail do Contato, por gentileza: ');
            const telephone = readline.question('Número do Contato, por gentileza: ');
            addContact(name, email, telephone);
            break;
        }
        case '2': {
            listContacts();
            break;
        }
        case '3': {
            const searchId = readline.question('Qual o ID do usuário: ');
            findContactById(parseInt(searchId));
            break;
        }
        case '4': {
            const updateId = readline.question('ID do usuário para atualização: ');
            const updatedName = readline.question('Novo nome de usuário (deixar em branco se não mudar): ');
            const updatedTelephone = readline.question('Novo número (se não mudar, deixar em branco): ');
            updateContact(parseInt(updateId), updatedName, updatedTelephone);
            break;
        }
        case '5': {
            const removeId = readline.question('ID do usuário para remoção: ');
            removeContact(parseInt(removeId));
            break;
        }
        case '6': {
            console.log('Saindo...');
            return true; // Sinaliza para sair
        }
        default: {
            console.log('Opção inválida, tente novamente.');
            break;
        }
    }
    return false; // Continua no loop
}

function runApp() {
    let exit = false;
    while (!exit) {
        menu();
        const option = readline.question('Escolha uma opção: ');
        exit = chooseOption(option); // Atualiza o estado de saída com base na opção escolhida
    }
}

// Executar o aplicativo
runApp();
