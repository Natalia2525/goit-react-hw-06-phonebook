export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  // const contacts = state.contacts.items;
  const contacts = getContacts(state);

  // const filter = state.contacts.filter;
  const filter = getFilter(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
  );
};
