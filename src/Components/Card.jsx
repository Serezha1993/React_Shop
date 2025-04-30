import { FavoriteIcon } from "./FavoriteIcon";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Card = ({
  product,
  onClickFavorites,
  favoritesIds,
  onClickAddToCart,
  cartIds,
}) => {
  const { name, brand, id, price, rating, img } = product;
  const color = cartIds && cartIds.includes(id) ? "green" : "#e97e7e";

  return (
    <div className="card">
      <img width={200} height={200} src={img} alt="здесь фото" />
      <div className="cardContent">
        <div>
          <div>{name}</div>
          <h3>{brand}</h3>
          <div>Рейтинг: {rating}</div>
          <h3>${price}</h3>
        </div>

        <div>
          {favoritesIds && (
            <div className="cardIcon" onClick={() => onClickFavorites(product)}>
              <FavoriteIcon active={favoritesIds.includes(id)} />
            </div>
          )}
          {cartIds && (
            <ShoppingCartOutlined
              onClick={() => onClickAddToCart(product)}
              style={{ fontSize: "40px", color: color }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
