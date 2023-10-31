import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, filterUpdate  } from "redux/contactsReducer";

export const App = () => {
  const contacts = useSelector((state) => state.contactsData.contacts);
  const filter = useSelector((state) => state.contactsData.filter);
  const dispatch = useDispatch();

// Додавання контактів
const handleAddInf = contact => {

const isContactDuplicate = contacts.some(user => 
  user.name.toLowerCase() === contact.name.toLowerCase());

if(isContactDuplicate){
  alert(`${contact.name} is already in contacts.`);
  return;
}

dispatch(addContact(contact));

}


const handleChange = event => {
    dispatch(filterUpdate(event.target.value));
}


const onDelete = contactId => {
    dispatch(deleteContact(contactId));
}

const filteredContacts = contacts.filter( contact =>  
  contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div
      style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '5px',
          backgroundColor: '#f2f2f2',
          padding: '20px',
        }}>
        <h1
        style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: '15px',
            color: '#333'
          }}>
            Phonebook
            </h1>
        <ContactForm handleAddInf={handleAddInf}/>
        <h2 
        style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: '15px',
            color: '#333'
          }}>
          Contacts
          </h2>
        <Filter filter={filter} handleChange={handleChange}/>
        <ContactList contacts={filteredContacts} onDelete={onDelete}/>
      </div>
    );
};
