import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

import './ContactList.css';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone, createdAt }) => {
        return (
          <ContactListItem key={createdAt} name={name} number={phone} id={id} />
        );
      })}
    </ul>
  );
};

export default ContactList;
