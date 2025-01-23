import { createSlice } from '@reduxjs/toolkit';

const tableOrder = createSlice({
  name: 'tableOrder',
  initialState : "",
  reducers: {
    setTableOrder_id: (state, action) => {
        console.log('Payload:', action.payload);
        return action.payload;
      },
  },
});

export const { setTableOrder_id } = tableOrder.actions;
export default tableOrder.reducer;
