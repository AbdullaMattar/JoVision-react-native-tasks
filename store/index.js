import { createSlice, configureStore } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'text',
  initialState: {
    value: '',
  },
  reducers: {
    textChanged: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { textChanged } = textSlice.actions;

const store = configureStore({
  reducer: textSlice.reducer,
});
export default store;
