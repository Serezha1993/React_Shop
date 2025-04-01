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
}) => {
  return (
    <div>
      <Header handleInput={handleInput} handleOpen={handleOpen} />
      {openNavbar && (
        <Navbar
          handleChangeCategory={handleChangeCategory}
          selectedCategory={selectedCategory}
        />
      )}
      <div className="card-block">
        {products.map((el) => (
          <Card
            addToFavorites={addToFavorites}
            favoritesIds={favoritesIds}
            id={el.id}
            key={el.id}
            name={el.name}
            brand={el.brand}
            img={el.img}
            rating={el.rating}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};
