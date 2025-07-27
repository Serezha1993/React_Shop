import { Link } from "react-router-dom";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { debounce } from "lodash";
import { Button, Input, Modal } from "antd";
import { useAppSelector } from "../../reduxHooks";
import { useState } from "react";
import { Login } from "./Login";

type Props = {
  handleChangeFilters: (a: string, b: string) => void;
  handleOpen: () => void;
  searchParams: URLSearchParams;
};

export const Header = ({
  handleChangeFilters,
  handleOpen,
  searchParams,
}: Props) => {
  const debouncedHandler = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handleChangeFilters("q", e.target.value),
    1000
  );

  const { cart } = useAppSelector((state) => state.cart);
  const { favorites } = useAppSelector((state) => state.favorites);

  const productCartQuantity = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const productFavoriteQuantity = favorites.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const filters =
    searchParams.get("category") ||
    searchParams.get("price_gte") ||
    searchParams.get("price_lte");

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="header">
      <Button
        size="large"
        type="text"
        onClick={() => setOpenModal(true)}
        icon={<UserOutlined style={{ fontSize: 30, color: "#fff" }} />}
      />
      <div className="logo">
        <img
          width={60}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s"
          alt="здесь фото"
        />
      </div>
      <div className="menuIconWrapper">
        {filters && <div className="circle" />}
        <div onClick={handleOpen}>
          <svg
            className="menuIcon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60"
            height="60"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"
            ></path>
          </svg>
        </div>
      </div>
      <Input
        onChange={debouncedHandler}
        defaultValue={searchParams.get("q") || ""}
      />
      <div className="headerIcons">
        <Link className="link" to="/cart">
          <ShoppingCartOutlined style={{ fontSize: "40px", color: "#fff" }} />
        </Link>
        {!!productCartQuantity && <div>{productCartQuantity}</div>}

        <Link className="link" to="/favorite">
          <div className="favoriteIconHeader">
            <HeartOutlined style={{ fontSize: "40px", color: "#fff" }} />
          </div>
        </Link>
        {!!productFavoriteQuantity && (
          <div className="iconQuantity">{productFavoriteQuantity}</div>
        )}
      </div>
      <Modal
        footer={null}
        onCancel={() => setOpenModal(false)}
        open={openModal}
        destroyOnHidden
      >
        <Login />
      </Modal>
    </div>
  );
};
