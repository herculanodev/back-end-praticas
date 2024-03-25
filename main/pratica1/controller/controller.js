const Contacts = require('../model'); // Assuming you also rename the 'modelo.js' file to 'model.js'
let lastId = 0;
const contacts = [];

function addContact(name, email, telephone) {
    lastId++;
    const newContact = new Contacts(lastId, name, email, telephone);
    contacts.push(newContact);
}

function listContacts() {
    if (contacts.length > 0) {
        console.log(`Contact List:`);
        contacts.forEach((contact) => {
            console.log(`ID ${contact.id}. Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.telephone}`);
        });
    } else {
        console.log(`There are no contacts.`);
        return null;
    }
}

function findContactById(id) {
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
        console.log(`Contact found: ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}`);
        return contact;
    } else {
        console.log('Contact not found');
        return null;
    }
}
function updateContact(id, name, telephone) {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        // Atualiza apenas o nome e o telefone, mantém o email e o ID inalterados
        contacts[index].name = name || contacts[index].name; // Atualiza o nome se fornecido
        contacts[index].telephone = telephone || contacts[index].telephone; // Atualiza o telefone se fornecido
        console.log(`Contact updated`);
    } else {
        console.log(`Contact not found`);
    }
}


function removeContact(id) {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log(`Contact with ID ${id} was removed from the contact list.`);
    } else {
        console.log(`Contact not found`);
    }
}

module.exports = {
    addContact,
    removeContact,
    updateContact,
    findContactById,
    listContacts,
    lastId
};
