import { FavoriteIcon } from "./FavoriteIcon";

export const Card = ({ product, onClickFavorites, favoritesIds }) => {
  const { name, brand, id, price, rating, img } = product;
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
        {favoritesIds && (
          <div className="cardIcon" onClick={() => onClickFavorites(product)}>
            <FavoriteIcon active={favoritesIds.includes(id)} />
          </div>
        )}
      </div>
    </div>
  );
};
