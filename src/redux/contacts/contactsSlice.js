// import { createSlice } from '@reduxjs/toolkit';
// import {
//   fetchContacts,
//   deleteContact,
//   addContact,
//   redactContact,
// } from './operations';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { logOut } from 'redux/authorization/operations';

// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;

//   toast.error(
//     `${action.payload}` === 'Network Error'
//       ? `${action.payload}`
//       : 'Something went wrong.Check your data and try again'
//   );
// };

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)

//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         const index = state.items.findIndex(
//           task => task.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(deleteContact.rejected, handleRejected)

//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.unshift(action.payload);
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(addContact.rejected, handleRejected)

//       .addCase(redactContact.pending, handlePending)
//       .addCase(redactContact.fulfilled, (state, action) => {
//         const index = state.items.findIndex(
//           task => task.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//         state.items.unshift(action.payload);
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(redactContact.rejected, handleRejected)
//       .addCase(logOut.fulfilled, state => {
//         state.items = [];
//         state.error = null;
//         state.isLoading = false;
//       });
//   },
// });

// export const contactsReducer = contactSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

import { addContact, fetchContacts, removeContact } from './operations';

const statusPending = state => {
  state.isLoading = true;
  state.error = null;
};

const statusRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const statusFinally = state => {
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: statusPending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: statusRejected,

    [addContact.pending]: statusPending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state = state.items.push(action.payload);
    },
    [addContact.rejected]: statusRejected,

    [removeContact.pending]: statusPending,
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => {
        return contact.id !== action.payload.id;
      });
    },
    [removeContact.rejected]: statusRejected,
    [removeContact.finally]: statusFinally,
  },
});

export const contactsReducer = contactsSlice.reducer;