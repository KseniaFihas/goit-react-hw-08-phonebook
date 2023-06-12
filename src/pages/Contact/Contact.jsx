// import css from './ContactList.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import {
//   selectError,
//   selectFilteredContacts,
//   selectIsLoading,
// } from 'redux/selectors';
// import { fetchContacts, deleteContact } from 'redux/authorization/operations';

// export const ContactList = () => {
//   const filteredContacts = useSelector(selectFilteredContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const onDeleteContact = id => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <>
//       {isLoading && <div className={css.spinner}></div>}
//       {!filteredContacts?.length && !error && !isLoading && (
//         <p className={css.contactName}>No contacts found.</p>
//       )}

//       {error && <p className={css.contactName}>{error}</p>}

//       <ul className={css.list}>
//         {filteredContacts.map(({ id, name, phone }) => (
//           <li className={css.item} key={id}>
//             <p className={css.contactName}>
//               {name}: {phone}
//             </p>
//             <button
//               className={css.button}
//               type="button"
//               onClick={() => onDeleteContact(id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

import Alert from '@mui/material/Alert';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';

import {
  ContactForm,
  ContactList,
  Filter,
  Loader,
  Section,
} from '../../components';
import css from './Contact.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container} >
      {error && <Alert severity="error">{error}</Alert>}
      <div className={css.main }>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          {isLoading && <Loader />}
          <ContactList />
        </Section>
      </div>
    </div>
  );
};

export default Contacts;