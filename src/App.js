import "./App.scss";
import { useEffect, useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { FavoritePage } from "./pages/favorite";
import { fetchFavorites } from "./pages/favorite/favoritesSlice";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./pages/main/productsSlice";
import { CartPage } from "./pages/cart";
import { loadCart } from "./pages/cart/slices";
import { Product } from "./pages/product";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  

  const handleChangeFilters = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.get(key) === value || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    setSearchParams(newParams);
  };

  // useEffect(() => {
  //   setPage(1);
  // }, [inputName, selectedCategory, sort, price]);

  useEffect(() => {
    if (searchParams) {
      dispatch(fetchProducts(searchParams.toString()));
    }
  }, [searchParams]);

  useEffect(() => {
    dispatch(fetchFavorites());
    dispatch(loadCart());
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Main handleChangeFilters={handleChangeFilters} />}
        />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
