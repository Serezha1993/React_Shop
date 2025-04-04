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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setProducts(result);
      })
      .catch((error) => console.log(error));
  }, []);




  const [inputName, setInputName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [favoritesIds, setFavoritesIds] = useState([]);

  const [openNavbar, setOpenNavbar] = useState(false);

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
    if (favoritesIds.includes(id)) {
      setFavoritesIds(favoritesIds.filter((i) => i !== id));
      return;
    }
    setFavoritesIds([...favoritesIds, id]);
  };

  const favoriteProducts = products.filter((product) =>
    favoritesIds.includes(product.id)
  );

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
              favoritesIds={favoritesIds}
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
