export const Card = ({ img, name, rating, price, brand }) => {
  return (
    <div>
      <div className="card">
        <img width={200} height={200} src={img} alt="здесь фото" />
        <div>{name}</div>
        <h3>{brand}</h3>
        <div>Рейтинг: {rating}</div>
        <h3>${price}</h3>
      </div>
    </div>
  );
};
