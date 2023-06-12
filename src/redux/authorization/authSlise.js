// import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { logIn,logOut,refreshUser,register } from './operations';


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
//       : 'Something went wrong. Check your data and try again'
//   );
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: { email: null, password: null },
//     token: null,
//     isLoaggedIn: false,
//     isRefreshing: false,
//     error: null,
//     isLoading: false,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(register.pending, handlePending)
//       .addCase(register.fullfield, (state, action) => {
//         state.token = action.payload.token;
//         state.user = action.payload.user;
//         state.isLoaggedIn = true;
//         state.isLoading = false;
//       })
//       .addCase(register.rejected, handleRejected)
//       .addCase(logIn.pending, handlePending)
//       .addCase(logIn.fullfield, (state, action) => {
//         state.token = action.payload.token;
//         state.user = action.payload.user;
//         state.isLoaggedIn = true;
//         state.isLoading = false;
//       })
//       .addCase(logIn.rejected, handleRejected)

//       .addCase(logOut.pending, handlePending)
//       .addCase(logOut.fullfield, state => {
//         state.user = { email: null, password: null };
//         state.token = null;
//         state.isLoaggedIn = false;
//         state.isRefreshing = false;
//         state.error = null;
//         state.isLoading = false;
//       })
//       .addCase(logOut.rejected, handleRejected)
//       .addCase(refreshUser.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fullfield, (state, action) => {
//         state.user = action.payload;
//         state.isLoaggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
