import "./index.css";

export const CartItem = ({ product, onClickFavorites }) => {
  const { name, brand, id, price, rating, img } = product;

  let quantity = 1;

  return (
    <div className="cartItemBlock">
      <img width={100} height={100} src={img} alt="здесь фото" />
      <div className="cartItemTitle">
        <h3>{brand}</h3>
        <div>{name}</div>
      </div>
      <div className="cartItemWrapper">
        <div className="cartItemQuantity">
          <button>+</button>
          <span>{quantity}</span>
          <button>-</button>
        </div>
        <h3 className="cartItemPrice">${price}</h3>
      </div>
    </div>
  );
};
