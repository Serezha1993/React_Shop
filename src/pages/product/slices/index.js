import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProduct = createAsyncThunk(
  "products/loadProduct",
  async (id, thunkAPI) => {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    const result = await response.json();

    return result;
  }
);

const initialState = {
  product: null,
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productsSlice.reducer;
