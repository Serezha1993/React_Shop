import { ShoppingCartOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { loadProduct } from "./slices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./index.css"

export const Product = ({ onClickAddToCart }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(loadProduct(id));
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }
  const { name, brand, rating, price, img } = product;

  return (
    <div className="productPageBlock">
      <img width={200} height={200} src={img} alt="здесь фото" />
      <div className="">
        <div>
          <div>{name}</div>
          <h3>{brand}</h3>
          <div>Рейтинг: {rating}</div>
          <h3>${price}</h3>
        </div>

        <div>
          {/* {favoritesIds && (
            <div className="cardIcon" onClick={() => onClickFavorites(product)}>
              <FavoriteIcon active={favoritesIds.includes(id)} />
            </div>
          )}
          {cartIds && (
            <ShoppingCartOutlined
              onClick={() => onClickAddToCart(product)}
              style={{ fontSize: "40px", color: color }}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};
