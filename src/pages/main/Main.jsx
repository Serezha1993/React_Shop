import { Card } from "../../Components/productCard";
import { Header } from "../../Components/header";
import { Navbar } from "../../Components/navbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Sort } from "../../Components/Sort/Sort";
import { Drawer } from "antd";

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

      <Drawer open={handleOpen}>
        <Navbar
          handleChangeCategory={handleChangeCategory}
          selectedCategory={selectedCategory}
        />
      </Drawer>

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
