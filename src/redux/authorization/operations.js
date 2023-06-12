// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const setAuthHeader = token =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
// const cleanAuthHeader = () =>
//   (axios.defaults.headers.common.Authorization = '');

// export const register = createAsyncThunk(
//   'auth/register',
//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/users/singup', user);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const loginization = createAsyncThunk(
//   'auth/loginization',
//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/users/login', user);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk(
//   'auth/logout',
//   async (user, { rejectWithValue }) => {
//     try {
//       await axios.post('/user/logout', user);
//       cleanAuthHeader();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const refreshUser = createAsyncThunk(
//   'auth/refreshUser',
//   async (_, { getState, rejectWithValue }) => {
//     const { token } = getState().auth;
//     token && setAuthHeader(token);

//     try {
//       const response = await axios.get('/users/current');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/signup', user);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/login', user);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    const state = rejectWithValue.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);