import { createSlice } from '@reduxjs/toolkit';

export const stockSlice = createSlice({
  name: 'stock',
  initialState: [],
  reducers: {
    setStocks: (state, action) => {
      return action.payload;
    },
  },
});

export const { setStocks } = stockSlice.actions;
export default stockSlice.reducer;
