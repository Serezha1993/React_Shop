import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../../../store";

type UserType = {
  name: string;
  login: string;
  phone: string;
  password: string;
  id?: string;
};

export const registration = createAsyncThunk<
  UserType,
  UserType,
  { rejectValue: { message: string } }
>("user/registration", async (userForm, { rejectWithValue }) => {
  const userResult = await fetch(`http://localhost:5000/users`);
  const users: UserType[] = await userResult.json();

  const checkUser = users.some(
    (user) => user.login === userForm.login || user.phone === userForm.phone
  );

  if (checkUser) {
    return rejectWithValue({ message: "Уже зарегистрирован" });
  }

  if (!checkUser) {
    const result = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      body: JSON.stringify(userForm),
      headers: {
        "Content-type": "application/json",
      },
    });
    const user = await result.json();
    return user;
  }
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
