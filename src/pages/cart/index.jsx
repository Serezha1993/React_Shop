import { useSelector } from "react-redux";
import { ButtonBack } from "../../Components/buttonBack";
import { Card } from "../../Components/Card";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      <div className="card-block">
        {cart.length ? (
          cart.map((el) => <Card key={el.id} product={el} />)
        ) : (
          <h3>Товаров нет в корзине!</h3>
        )}
      </div>
      <ButtonBack />
    </div>
  );
};
