import { Link } from "react-router-dom";
import { Card } from "../../Components/Card";
import { useSelector } from "react-redux";
import { ButtonBack } from "../../Components/buttonBack";

export const FavoritePage = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div>
      <div className="card-block">
        {favorites.length ? (
          favorites.map((el) => <Card key={el.id} product={el} />)
        ) : (
          <h3>Товаров нет...!</h3>
        )}
      </div>
      <ButtonBack />
    </div>
  );
};
