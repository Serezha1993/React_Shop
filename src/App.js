import "./App.css";
import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { FavoritePage } from "./FavoritePage";
import { deleteFavorites, fetchFavorites } from "./favoritesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";
import { addToFavorites } from "./favoritesSlice";

function App() {
  const [inputName, setInputName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const favorites = useSelector((state) => state.favorites.favorites);
  const products = useSelector((state) => state.products.products);
  const productsLoading = useSelector((state) => state.products.loading);

  const [openNavbar, setOpenNavbar] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ inputName, selectedCategory }));
  }, [inputName, selectedCategory]);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  const handleInput = (text) => {
    setInputName(text);
  };

  const handleOpen = () => {
    setOpenNavbar(!openNavbar);
  };

  const handleChangeCategory = (changeCategory) => {
    if (changeCategory === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(changeCategory);
    }
  };

  const onClickFavorites = (product) => {
    if (favorites.some((el) => el.id === product.id)) {
      dispatch(deleteFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              openNavbar={openNavbar}
              handleInput={handleInput}
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
              products={products}
              onClickFavorites={onClickFavorites}
              favoritesIds={favorites.map((i) => i.id)}
              handleOpen={handleOpen}
              loading={productsLoading}
            />
          }
        />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
