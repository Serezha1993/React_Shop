import { Card } from "../../Components/productCard";
import { Header } from "../../Components/header";
import { Navbar } from "../../Components/navbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Sort } from "../../Components/Sort/Sort";
import { Drawer, Pagination } from "antd";

export const Main = ({ searchParams, handleChangeFilters }) => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const { products, loading } = useSelector((state) => state.products);

  const handleOpen = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <div>
      <Header
        handleChangeFilters={handleChangeFilters}
        handleOpen={handleOpen}
        searchParams={searchParams}
      />

      <Drawer
        open={openNavbar}
        placement="left"
        onClose={() => setOpenNavbar(false)}
      >
        <Navbar
          handleChangeFilters={handleChangeFilters}
          searchParams={searchParams}
        />
      </Drawer>

      <Sort
        searchParams={searchParams}
        handleChangeFilters={handleChangeFilters}
      />

      {loading && <h1>Loading...</h1>}
      <div className="card-block">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        current={searchParams.get("_page")}
        total={20}
        onChange={(page) => handleChangeFilters("_page", page)}
      />
    </div>
  );
};
