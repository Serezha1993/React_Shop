import { FavoriteIcon } from "./FavoriteIcon";

export const Card = ({
  img,
  name,
  rating,
  price,
  brand,
  addToFavorites,
  id,
  favoritesIds,
}) => {
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
            <div className="cardIcon" onClick={() => addToFavorites(id)}>
              <FavoriteIcon active={favoritesIds.includes(id)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
