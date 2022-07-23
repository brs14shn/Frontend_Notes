import { createSlice } from "@reduxjs/toolkit";

const initilaState = {
  user: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState: initilaState,
  reducers: {},
});

// export const { setUser, clearUser } = authSlice.actions;

export default newsSlice.reducer;
