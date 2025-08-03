import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../../../store";

type UserType = {
  name: string;
  login: string;
  phone?: string;
  password?: string;
  id?: string;
};

const getUsers = async (): Promise<UserType[]> => {
  const userResult = await fetch(`http://localhost:5000/users`);
  return await userResult.json();
};

export const login = createAsyncThunk<
  UserType | void,
  UserType,
  { rejectValue: { message: string } }
>("user/login", async (userForm, { rejectWithValue }) => {
  const users: UserType[] = await getUsers();


//   const checkUser = users.find(
//     (user) =>
//       user.login === userForm.login);


  const checkUserLogin = users.some(
    (user) =>
      user.login === userForm.login || user.password === userForm.password
  );



  const checkUserPassword = users.some(
    (user) =>
      user.login !== userForm.login || user.password !== userForm.password
  );

  if (checkUserLogin) {
    return userForm
  } else if (!checkUserPassword) {
    return rejectWithValue({ message: "лониг или пароль не верен" });
//   } else if (!checkUser) {
//     return rejectWithValue({ message: "лониг или пароль не верен" });
  }

//   return userForm
});

export const registration = createAsyncThunk<
  UserType,
  UserType,
  { rejectValue: { message: string } }
>("user/registration", async (userForm, { rejectWithValue }) => {
  const users: UserType[] = await getUsers();

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
