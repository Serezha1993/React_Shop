import "./App.css";
import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { FavoritePage } from "./FavoritePage";

function App() {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputName, setInputName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [favoritesIds, setFavoritesIds] = useState([]);

  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:5000/products?q=${inputName}&category_like=${selectedCategory}`
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setProducts(result);
      })
      .catch((error) => console.log(error));
  }, [inputName, selectedCategory]);

  useEffect(() => {
    fetch(`http://localhost:5000/favorites`)
      .then((response) => response.json())
      .then((result) => {
        setFavoriteProducts(result);
      })
      .catch((error) => console.log(error));
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

  const addToFavorites = (id) => {
    fetch(`http://localhost:5000/favorites`, {
      method: "POST",
      body: JSON.stringify({ name: "apple", price: 3000 }),
      header: {
        "Content-type": "application/json",
      },
    });
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
              favoritesIds={[]}
              handleOpen={handleOpen}
              loading={loading}
            />
          }
        />
        <Route
          path="/favorite"
          element={<FavoritePage favoriteProducts={favoriteProducts} />}
        />
      </Routes>
    </div>
  );
}

export default App;
