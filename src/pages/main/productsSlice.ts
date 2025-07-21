import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "../../types";



export const fetchProducts = createAsyncThunk<ProductType[], string>(
  "products/fetchProducts",
  async (params) => {
    const response = await fetch(`http://localhost:5000/products?${params}`);
    const result = await response.json();

    return result;
  }
);

type initialStateType = {
  loading: boolean;
  products: ProductType[];
};

const initialState: initialStateType = {
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
  reducers: {},
});

export default productsSlice.reducer;
