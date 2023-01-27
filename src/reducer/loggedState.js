import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  nickname: "",
  birth: "",
  tel: "",
  address: "",
  detailAddress: "",
};

const loggedState = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginAccount: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.nickname = action.payload.nickname;
      state.birth = action.payload.birth;
      state.tel = action.payload.tel;
      state.address = action.payload.address;
      state.detailAddress = action.payload.detailAddress;
    },
    logoutAccount: (state) => {
      state.email = null;
      state.name = null;
      state.nickname = null;
      state.birth = null;
      state.tel = null;
      state.address = null;
      state.detailAddress = null;
    },
  },
});
export const { loginAccount, logoutAccount } = loggedState.actions;
export default loggedState;
