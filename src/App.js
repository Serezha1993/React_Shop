import './App.css';
import { Card } from './Components/Card';
import { Header } from './Components/Header';

const products = [
    {
      brand: 'samsung',
      name: 'samsung s20',
      price: 300,
      category: 'phone',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
     },
     { 
      brand: 'apple',
      name: 'iphone13',
      price: 300,
      category: 'phone',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71MHTD3uL4L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
      },
  ]

function App () {
  return (
    <div>
      <Header/>
     <div className="card-block">
      {products.map((el) => (
        <Card 
        name={el.name}
        img={el.img}
        rating={el.rating}
        price={el.price}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
