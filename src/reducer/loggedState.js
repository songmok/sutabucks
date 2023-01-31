import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  miId: "",
  miName: "",
  miNickname: "",
  miBirth: "",
  miGen: "",
  miPhoneNum: "",
  miAddress: "",
  miDetailAddress: "",
};

const loggedState = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginAccount: (state, action) => {
      state.miId = action.payload.miId;
      state.miName = action.payload.miName;
      state.miNickname = action.payload.miNickname;
      state.miBirth = action.payload.miBirth;
      state.miPhoneNum = action.payload.miPhoneNum;
      state.miAddress = action.payload.miAddress;
      state.miDetailAddress = action.payload.miDetailAddress;
    },
    logoutAccount: (state) => {
      state.miId = "";
      state.miName = "";
      state.miNickname = "";
      state.miBirth = "";
      state.miPhoneNum = "";
      state.miAddress = "";
      state.miDetailAddress = "";
    },
  },
});
export const { loginAccount, logoutAccount } = loggedState.actions;
export default loggedState;
