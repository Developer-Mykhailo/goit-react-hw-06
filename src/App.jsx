import { useState } from "react";

import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./data/contats-data.json";
import ContactList from "./components/ContactList/ContactList";

function App() {
  // state
  const [contacts, setContact] = useState(() => {
    const saved = localStorage.getItem("contacts-data");
    return saved ? JSON.parse(saved) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  // handlers
  const addContact = (newContact) => {
    setContact((prev) => {
      const newContacts = [...prev, newContact];
      localStorage.setItem("contacts-data", JSON.stringify(newContacts));
      return newContacts;
    });
  };

  const deleteContact = (contact_id) => {
    setContact((prevContacts) => {
      const newContacts = prevContacts.filter(
        (contact) => contact.id !== contact_id
      );
      localStorage.setItem("contacts-data", JSON.stringify(newContacts));
      return newContacts;
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // JSX
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </Container>
  );
}

export default App;
