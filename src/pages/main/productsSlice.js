import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params, thunkAPI) => {
    const { inputName, selectedCategory, sort, price, page } = params;

    const sortQuery = sort ? `&_sort=price&_order=${sort}` : "";

    const priceFrom = price.priceFrom ? `&price_gte=${price.priceFrom}` : "";
    const priceTo = price.priceTo ? `&price_lte=${price.priceTo}` : "";

    const response = await fetch(
      `http://localhost:5000/products?_page=${page}&q=${inputName}&category_like=${selectedCategory}${sortQuery}${priceFrom}${priceTo}`
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

      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
