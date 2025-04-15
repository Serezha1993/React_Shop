import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params, thunkAPI) => {
    const { inputName, selectedCategory } = params;

    const response = await fetch(
      `http://localhost:5000/products?q=${inputName}&category_like=${selectedCategory}`
    );
    const result = await response.json();

    return result;
  }
);

const initialState = {
  products: [],
  loading: false,
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      const dataFromServer = action.payload;

      state.products = dataFromServer;
    });
  },
});

export default productsSlice.reducer;
