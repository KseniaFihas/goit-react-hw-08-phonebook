// import { createSlice } from '@reduxjs/toolkit';
// import { logOut } from 'redux/authorization/operations';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     filtration: (state, action) => {
//       return (state = action.payload);
//     },
//   },
//   extraReducers: builder => {
//     builder.addCase(logOut.fulfilled, state => {
//       return (state = '');
//     });
//   },
// });

// export const { filtration } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const getFilterValue = state => state.filter;