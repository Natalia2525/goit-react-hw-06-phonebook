// import { useState, useEffect } from 'react';
import PhonebookForm from './Components/PhonebookForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

const App = () => {
  // useEffect(() => {
  //   const json = localStorage.getItem('contacts');
  //   const savedContacts = JSON.parse(json);
  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   const json = JSON.stringify(contacts);
  //   localStorage.setItem('contacts', json);
  // });

  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
