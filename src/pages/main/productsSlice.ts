import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Product = {
  id: number;
  brand: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  quantity: number;
  img: string;
};

export const fetchProducts = createAsyncThunk<Product[], string>(
  "products/fetchProducts",
  async (params) => {
    const response = await fetch(`http://localhost:5000/products?${params}`);
    const result = await response.json();

    return result;
  }
);

type initialStateType = {
  loading: boolean;
  products: Product[];
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
