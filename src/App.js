import "./App.css";
import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { FavoritePage } from "./FavoritePage";
import { fetchFavorites } from "./favoritesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";

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

  const addToFavorites = (product) => {
    if (favorites.some((el) => el.id === product.id)) {
      fetch(`http://localhost:5000/favorites/${product.id}`, {
        method: "DELETE",
      }).then(() => dispatch(fetchFavorites()));
    } else {
      fetch(`http://localhost:5000/favorites`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json",
        },
      }).then(() => dispatch(fetchFavorites()));
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
              addToFavorites={addToFavorites}
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
