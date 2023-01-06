import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const UserDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.data = action.payload.data;
    },
  },
});

export const selectUserData = (state) => state.data;
export const { setUserData } = UserDataSlice.actions;
export default UserDataSlice.reducer;
