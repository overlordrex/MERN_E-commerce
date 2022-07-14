import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    fetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.fetching = true;
    },
    loginSucess: (state, action) => {
      state.fetching = false;
      state.currentUser = action.payload;
    },
    loginError: (state) => {
      state.fetching = false;
      state.error = true;
    },
  },
});

export const { loginError, loginStart, loginSucess } = userSlice.actions;
export default userSlice.reducer;
