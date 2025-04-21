import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { FavoritePage } from "./pages/favorite/FavoritePage";
import {fetchFavorites,} from "./pages/favorite/favoritesSlice";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./pages/main/productsSlice";


function App() {
  const [inputName, setInputName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


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

  const handleChangeCategory = (changeCategory) => {
    if (changeCategory === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(changeCategory);
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              handleInput={handleInput}
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
              
            />
          }
        />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
