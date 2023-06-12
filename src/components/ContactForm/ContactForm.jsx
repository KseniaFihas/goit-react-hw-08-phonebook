// import css from './ContactForm.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
// import { nanoid } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import { addContact } from 'redux/authorization/operations';

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   const handleSubmit = event => {
//     event.preventDefault();

//     const contact = {
//       id: nanoid(),
//       name: event.currentTarget.elements.name.value,
//       number: event.currentTarget.elements.number.value,
//     };

//     const isExist = contacts.find(
//       ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//     );

//     if (isExist) {
//       return toast.console.warn(`${contact.name} is already in contacts`);
//     }
//     dispatch(addContact(contact));
//     event.currentTarget.reset();
//   };

//   return (
//     <>
//       <form className={css.form} onSubmit={handleSubmit}>
//         <label className={css.label} htmlFor={nanoid()}>
//           Name
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             id={nanoid()}
//             required
//           />
//         </label>

//         <label className={css.label} htmlFor={nanoid()}>
//           Number
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             id={nanoid()}
//             required
//           />
//         </label>
//         <br />
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     </>
//   );
// };

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();

    const inputName = e.currentTarget.name.value;
    const inputNumber = e.currentTarget.number.value;

    const data = {
      name: inputName,
      number: inputNumber,
    };

    const normalizeFilter = inputName.toLowerCase();
    const stateNameArray = contacts.map(({ name }) => name.toLowerCase());

    !stateNameArray.includes(normalizeFilter)
      ? dispatch(addContact(data))
      : Notify.failure(`${data.name} is already in contacts.`, {
          width: '350px',
          opacity: 0.8,
        });

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        <h3 className={css.form_title}>Name</h3>
        <input
          className={css.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <h3 className={css.form_title}>Phone number</h3>
        <input
          className={css.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button
      className={css.form_button}  type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;