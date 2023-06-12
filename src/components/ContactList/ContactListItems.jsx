import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';

import css from './ContactList.module.css';

export const ContactListItems = ({ contactId, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContact(contactId));
    Notify.success(`${name}  delete from your contacts`, {
      width: '350px',
      opacity: 0.8,
    });
  };

  return (
      <li className={css.list}>
      <p>
        {name}: {number}
      </p>
      <button className={css.button} type="button" onClick={() => deleteContact()}>
        Delete
      </button>
    </li>
  );
};

ContactListItems.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};