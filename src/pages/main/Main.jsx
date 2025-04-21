import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { Navbar } from "../../Components/Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, deleteFavorites } from "../favorite/favoritesSlice";

export const Main = ({
  handleInput,
  handleChangeCategory,
  selectedCategory,
}) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const {products, loading} = useSelector((state) => state.products);


  const handleOpen = () => {
    setOpenNavbar(!openNavbar);
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
      <Header handleInput={handleInput} handleOpen={handleOpen} />
      {openNavbar && (
        <Navbar
          handleChangeCategory={handleChangeCategory}
          selectedCategory={selectedCategory}
        />
      )}

      {loading && <h1>Loading...</h1>}
      <div className="card-block">
        {products.map((product) => (
          <Card
            key={product.id}
            onClickFavorites={onClickFavorites}
            favoritesIds={favorites.map((i) => i.id)}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
