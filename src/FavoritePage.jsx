import { Link } from "react-router-dom";
import { Card } from "./Components/Card";

export const FavoritePage = ({ favoriteProducts }) => {
  return (
    <div>
      <div className="card-block">
        {favoriteProducts.length ? (
          favoriteProducts.map((el) => <Card key={el.id} product={el} />)
        ) : (
          <h3>Товаров нет...!</h3>
        )}
      </div>
      <Link to="/">
        <div>Назад на главную</div>
      </Link>
    </div>
  );
};
