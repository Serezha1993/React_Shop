import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./index.scss"

export const Header = ({ handleInput, handleOpen }) => {
  return (
    <div className="header">
      <div>
        <img
          width={60}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s"
          alt="здесь фото"
        />
      </div>
      <div onClick={handleOpen}>
        <svg
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
      <input onChange={(e) => handleInput(e.target.value)} />
      <Link to="/cart">
        <ShoppingCartOutlined style={{ fontSize: "40px", color: "#fff" }} />
      </Link>
      <Link to="/favorite">
        <div className="favoriteIconHeader">
          <HeartOutlined style={{ fontSize: "40px", color: "#fff" }} />
        </div>
      </Link>
    </div>
  );
};
