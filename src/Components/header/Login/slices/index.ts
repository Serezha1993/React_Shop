import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../../../store";

type UserType = {
  name: string;
  login: string;
  phone: string;
  password: string;
  id?: string;
};

const getUsers = createAsyncThunk<UserType[]>("user/list", async (userForm) => {
  const result = await fetch(`http://localhost:5000/users`);
  const users = await result.json();
  return users;
});

export const registration = createAsyncThunk<
  UserType,
  UserType,
  { dispatch: AppDispatch }
>("user/registration", async (userForm, { dispatch }) => {

    const users = dispatch(getUsers())


    
  const result = await fetch(`http://localhost:5000/users`, {
    method: "POST",
    body: JSON.stringify(userForm),
    headers: {
      "Content-type": "application/json",
    },
  });
  const user = await result.json();
  return user;
  // dispatch(loadCart());
});

type initialStateCart = {
  user: UserType | null;
};

const initialState: initialStateCart = {
  user: null,
};

const registrationSlice = createSlice({
  name: "cartSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
  reducers: {},
});

export default registrationSlice.reducer;
