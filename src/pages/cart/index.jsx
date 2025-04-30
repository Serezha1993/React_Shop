import { useSelector } from "react-redux";
import { ButtonBack } from "../../Components/buttonBack";
import { CartItem } from "./CartItem";
import "./index.css"

export const CartPage = (onClickFavorites) => {
  const { cart } = useSelector((state) => state.cart);
  const totalPrice = 4444;
  return (
    <div>
      <div className="">
        {cart.length ? (
          cart.map((el) => (
            <CartItem
              key={el.id}
              product={el}
              onClickFavorites={onClickFavorites}
            />
          ))
        ) : (
          <h3>Товаров нет в корзине!</h3>
        )}
      </div>
      <div className="totalPriceBlock">
        <di>Количество</di>
        <di>{productCount}</di>
        <h3>Итого:</h3>
        <h3 className="totalPrice">{totalPrice}</h3>
      </div>
      <ButtonBack />
    </div>
  );
};
