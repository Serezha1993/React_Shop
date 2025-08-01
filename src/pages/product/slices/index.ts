import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "../../../types";

export const loadProduct = createAsyncThunk<ProductType, string>(
  "products/loadProduct",
  async (id) => {
    const response = await fetch(`http://localhost:5000/products/${id}`);
    const result = await response.json();

    return result;
  }
);

type CommentType = {
  username: string;
  text: string;
  productId: number;
  date: string;
  id?: number;
};

export const loadComments = createAsyncThunk<CommentType[], number>(
  "products/loadComments",
  async (id) => {
    const result = await fetch(
      `http://localhost:5000/comments?productId=${id}`
    );
    const data = await result.json();

    return data;
  }
);

export const createComment = createAsyncThunk<void, CommentType>(
  "products/createComment",
  async (comment, { dispatch }) => {
    await fetch(`http://localhost:5000/comments`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch(loadComments(comment.productId));
  }
);

type InitialStateType = {
  product: ProductType | null;
  comments: CommentType[];
};

const initialState: InitialStateType = {
  product: null,
  comments: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(loadComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
  reducers: {},
});

export default productsSlice.reducer;
