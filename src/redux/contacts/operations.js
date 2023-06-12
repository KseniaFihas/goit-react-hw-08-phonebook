// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';


// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (subscriber, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`/contacts`, subscriber);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const redactContact = createAsyncThunk(
//   'contacts/redactContact',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.patch(`/contacts/${data.id}`, {
//         name: data.name,
//         number: data.number,
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.emessage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);