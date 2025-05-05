import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCart = createAsyncThunk(
  "products/loadCart",
  async (params, thunkAPI) => {
    const response = await fetch(`http://localhost:5000/cart`);
    const result = await response.json();

    return result;
  }
);

export const addToCart = createAsyncThunk(
  "products/addToCart",
  async (product, { dispatch }) => {
    await fetch(`http://localhost:5000/cart`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch(loadCart());
  }
);

export const deleteFromCart = createAsyncThunk(
  "products/deleteFromCart",
  async (id, { dispatch }) => {
    await fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    });
    dispatch(loadCart());
  }
);

export const updateProductCart = createAsyncThunk(
  "products/updateProductCart",
  async (updatedProduct, { dispatch }) => {
    await fetch(`http://localhost:5000/cart/${updatedProduct.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch(loadCart());
  }
);

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

export default cartSlice.reducer;
