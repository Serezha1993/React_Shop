import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { Navbar } from "../../Components/Navbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Sort } from "../../Components/Sort/Sort";

export const Main = ({
  handleInput,
  handleChangeCategory,
  selectedCategory,
  handleChangeSort,
  sort,
}) => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const { products, loading } = useSelector((state) => state.products);

  const handleOpen = () => {
    setOpenNavbar(!openNavbar);
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

      <Sort sort={sort} handleChangeSort={handleChangeSort} />

      {loading && <h1>Loading...</h1>}
      <div className="card-block">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
