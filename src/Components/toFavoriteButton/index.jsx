import { useAppDispatch, useAppSelector } from "react-redux";
import {
  addToFavorites,
  deleteFavorites,
} from "../../pages/favorite/favoritesSlice";

import { HeartFilled, HeartOutlined } from "@ant-design/icons";
export const ToFavoriteButton = ({ product }) => {
  const { favorites } = useAppSelector((state) => state.favorites);

  const dispatch = useAppDispatch();

  const onClickFavorites = () => {
    if (favorites.some((el) => el.id === product.id)) {
      dispatch(deleteFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <div onClick={onClickFavorites}>
      {isFavorite ? (
        <HeartFilled style={{ fontSize: "40px", color: "#d8e156" }} />
      ) : (
        <HeartOutlined style={{ fontSize: "40px", color: "#C7C7C7" }} />
      )}
    </div>
  );
};
