import { Card } from "../../Components/productCard";
import { Header } from "../../Components/header";
import { Navbar } from "../../Components/navbar";
import { useState } from "react";
import { useAppSelector } from "../../reduxHooks";
import { Sort } from "../../Components/Sort/Sort";
import { Drawer, Pagination, Skeleton } from "antd";
import { SearchParamsProps } from "../../types";

export const Main = ({
  searchParams,
  handleChangeFilters,
}: SearchParamsProps) => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const { products, loading } = useAppSelector((state) => state.products);

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

      <div className="card-block">
        {loading ? (
          <Skeleton loading={loading} active avatar></Skeleton>
        ) : (
          <>
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
      <Pagination
        current={
          searchParams.get("_page") ? Number(searchParams.get("_page")) : 1
        }
        total={20}
        onChange={(page) => handleChangeFilters("_page", String(page))}
      />
    </div>
  );
};
