import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '' 
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    }
  }
});

export const { setMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
