import { Link } from "react-router-dom";
import { ToFavoriteButton } from "../toFavoriteButton";
import { ToCartButton } from "../toCardButton";
import "./index.scss"

export const Card = ({ product }) => {
  const { name, brand, id, price, rating, img } = product;

  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <img width={200} height={200} src={img} alt="здесь фото" />
      </Link>
      <div className="cardContent">
        <Link to={`/product/${id}`}>
          <div>
            <div>{name}</div>
            <h3>{brand}</h3>
            <div>Рейтинг: {rating}</div>
            <h3>${price}</h3>
          </div>
        </Link>

        <div className="iconMainBlock">
          <ToFavoriteButton product={product} />
          <ToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};
