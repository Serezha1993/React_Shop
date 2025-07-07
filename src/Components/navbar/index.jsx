import { Flex, Input } from "antd/lib";
import "./index.scss";

export const Navbar = ({ handleChangeFilters, selectedCategory, price }) => {
  return (
    <>
      <div className="category">
        <div
          onClick={() => handleChangeFilters("category", "phone")}
          className={selectedCategory === "phone" ? "active" : ""}
        >
          Телефоны
        </div>
        <div
          onClick={() => handleChangeFilters("category", "laptop")}
          className={selectedCategory === "laptop" ? "active" : ""}
        >
          Ноутбуки
        </div>
        <div
          onClick={() => handleChangeFilters("category", "monitor")}
          className={selectedCategory === "monitor" ? "active" : ""}
        >
          Мониторы
        </div>
      </div>
      <div className="priceBlock">
        <h3>Цена</h3>
        <Flex gap="middle">
          <Input
            onChange={(e) => handleChangeFilters("priceFrom", e.target.value)}
          />{" "}
          -
          <Input
            onChange={(e) => handleChangeFilters("priceTo", e.target.value)}
          />
        </Flex>
      </div>
    </>
  );
};
