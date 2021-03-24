import ContactItem from './ContactItem';
// import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
} from '../../redux/contacts/contacts-selectors';

const useStyles = createUseStyles({
  list: {
    padding: 0,
    margin: 0,
  },
});

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const classes = useStyles();

  const getVisibleContacts = !filter
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
      );

  return (
    <ul className={classes.list}>
      {getVisibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ).isRequired,
// };

export default ContactList;
