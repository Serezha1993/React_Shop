import './App.css';
import { Card } from './Components/Card';
import { Header } from './Components/Header';
import React, { useState } from 'react';


const products = [
    {
      id: 1,
      brand: 'samsung',
      name: 'samsung s20',
      price: 300,
      category: 'phone',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
     },
     {
      id: 2,
      brand: 'samsung',
      name: 'samsung s20',
      price: 300,
      category: 'phone',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
     },
     {
      id: 3,
      brand: 'samsung',
      name: 'samsung s20',
      price: 300,
      category: 'monitor',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
     },
     {
      id: 4,
      brand: 'samsung',
      name: 'samsung s20',
      price: 300,
      category: 'monitor',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
     },
     {
      id: 5,
      brand: 'samsung',
      name: 'samsung s20',
      price: 300,
      category: 'phone',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
     },
     {
      id: 6,
      brand: 'samsung',
      name: 'samsung s20',
      price: 300,
      category: 'monitor',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
     },
     {
      id: 7,
      brand: 'samsung',
      name: 'samsung s20',
      price: 300,
      category: 'laptop',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
     },
     {
      id: 8,
      brand: 'samsung',
      name: 'samsung s20',
      price: 300,
      category: 'laptop',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
     },
     { 
      id: 9,
      brand: 'apple',
      name: 'iphone13',
      price: 300,
      category: 'phone',
      rating: 3,
      img: 'https://m.media-amazon.com/images/I/71MHTD3uL4L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        id: 10,
        brand: 'samsung',
        name: 'samsung s20',
        price: 300,
        category: 'laptop',
        rating: 3,
        img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
       },
       {
        id: 11,
        brand: 'samsung',
        name: 'samsung s20',
        price: 300,
        category: 'phone',
        rating: 3,
        img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
       },
       {
        id: 12,
        brand: 'samsung',
        name: 'samsung s20',
        price: 300,
        category: 'laptop',
        rating: 3,
        img: 'https://m.media-amazon.com/images/I/71l25hjYX1L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
       },
  ]

function App () {
  const [inputName, setInputName] = useState('')

  const filteredProduct = inputName ? products.filter((el) => el.brand === inputName) : products

  const handleInput = (text) => {
    setInputName(text)
  }

  return (
    <div>
      <Header handleInput={handleInput}/>
     <div className="card-block">
      {filteredProduct.map((el) => (
        <Card 
        key={el.id}
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
