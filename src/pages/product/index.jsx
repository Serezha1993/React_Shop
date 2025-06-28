import { useParams } from "react-router-dom";
import { loadProduct } from "./slices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./index.scss";
import { ToCartButton } from "../../Components/toCardButton";
import { ToFavoriteButton } from "../../Components/toFavoriteButton";

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
  const { name, brand, rating, price, img, description } = product;

  return (
    <div className="productPageBlock">
      <img width={200} height={200} src={img} alt="здесь фото" />
      <div className="productPageContent">
        <div>
          <div>{name}</div>
          <h3>{brand}</h3>
          <div>Рейтинг: {rating}</div>
          <h3>${price}</h3>
          <p>{description}</p>
        </div>

        <div className="productPageIcons">
          <ToFavoriteButton product={product} />
          <ToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};
