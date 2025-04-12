import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";

export const Main = ({
  openNavbar,
  handleInput,
  handleChangeCategory,
  selectedCategory,
  products,
  addToFavorites,
  favoritesIds,
  handleOpen,
  loading,
}) => {
  return (
    <div>
      <Header handleInput={handleInput} handleOpen={handleOpen} />
      {loading && <h1>Loading...</h1>}
      {openNavbar && (
        <Navbar
          handleChangeCategory={handleChangeCategory}
          selectedCategory={selectedCategory}
        />
      )}
      <div className="card-block">
        {products.map((product) => (
          <Card
            addToFavorites={addToFavorites}
            favoritesIds={favoritesIds}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
