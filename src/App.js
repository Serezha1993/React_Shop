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

  const loadFavorites = () => {
    fetch(`http://localhost:5000/favorites`)
      .then((response) => response.json())
      .then((result) => {
        setFavoriteProducts(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadFavorites();
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
    if (favoriteProducts.some((el) => el.id === product.id)) {
      fetch(`http://localhost:5000/favorites/${product.id}`, {
        method: "DELETE",
      }).then(() => loadFavorites());
    } else {
      fetch(`http://localhost:5000/favorites`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json",
        },
      }).then(() => loadFavorites());
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
              favoritesIds={favoriteProducts.map((i) => i.id)}
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
