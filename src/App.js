import './App.css';
import { Card } from './Components/Card';
import { Header } from './Components/Header';
import React, { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Main } from './Main';
import { FavoritePage } from './FavoritePage';



const products = [
    {
      id: 1,
      brand: 'hp',
      name: '155',
      price: 300,
      category: 'monitor',
      rating: 3,
      img: 'https://images.philips.com/is/image/philipsconsumer/b9803f34eb74494582e9b014012a3fa6?wid=700&hei=700&$pnglarge$'
     },
     {
      id: 2,
      brand: 'samsung',
      name: 'samsung s20',
      price: 900,
      category: 'phone',
      rating: 3,
      img: 'https://affordablephonesng.com/wp-content/uploads/2023/02/Samsung-Galaxy-S20-Plus.jpg'
     },
     {
      id: 3,
      brand: 'hp',
      name: '155',
      price: 550,
      category: 'monitor',
      rating: 3,
      img: 'https://images.philips.com/is/image/philipsconsumer/b9803f34eb74494582e9b014012a3fa6?wid=700&hei=700&$pnglarge$'
     },
     {
      id: 4,
      brand: 'hp',
      name: '155',
      price: 360, 
      category: 'monitor',
      rating: 3,
      img: 'https://images.philips.com/is/image/philipsconsumer/b9803f34eb74494582e9b014012a3fa6?wid=700&hei=700&$pnglarge$'
     },
     {
      id: 5,
      brand: 'apple',
      name: 'iphone 13',
      price: 300,
      category: 'phone',
      rating: 3,
      img: 'https://www.largo.fr/4516-large_default/iphone-12-mini-128-go-blanc-reconditionne.jpg'
     },
     {
      id: 6,
      brand: 'samsung',
      name: 'samsung s20',
      price: 700,
      category: '',
      rating: 3,
      img: 'https://affordablephonesng.com/wp-content/uploads/2023/02/Samsung-Galaxy-S20-Plus.jpg'
     },
     {
      id: 7,
      brand: 'macbook',
      name: 'Air 15',
      price: 200,
      category: 'laptop',
      rating: 3,
      img: 'https://img.5element.by/import/images/ut/goods/good_eb9dc94d-7028-11ef-8db4-005056012b6d/z1bq0009m-a3114-macbook-air-15-m3-8-10-8-512-space-gray-noutbuk-apple-1_600.jpg'
     },
     {
      id: 8,
      brand: 'macbook',
      name: 'Air 15',
      price: 800,
      category: 'laptop',
      rating: 3,
      img: 'https://img.5element.by/import/images/ut/goods/good_eb9dc94d-7028-11ef-8db4-005056012b6d/z1bq0009m-a3114-macbook-air-15-m3-8-10-8-512-space-gray-noutbuk-apple-1_600.jpg'
     },
     { 
      id: 9,
      brand: 'apple',
      name: 'iphone13',
      price: 300,
      category: 'phone',
      rating: 3,
      img: 'https://www.largo.fr/4516-large_default/iphone-12-mini-128-go-blanc-reconditionne.jpg'
      },
      {
        id: 10,
        brand: 'macbook',
        name: 'Air 15',
        price: 300,
        category: 'laptop',
        rating: 3,
        img: 'https://img.5element.by/import/images/ut/goods/good_eb9dc94d-7028-11ef-8db4-005056012b6d/z1bq0009m-a3114-macbook-air-15-m3-8-10-8-512-space-gray-noutbuk-apple-1_600.jpg'
       },
       {
        id: 11,
        brand: 'samsung',
        name: 'samsung s20',
        price: 300,
        category: 'phone',
        rating: 3,
        img: 'https://affordablephonesng.com/wp-content/uploads/2023/02/Samsung-Galaxy-S20-Plus.jpg'
       },
       {
        id: 12,
        brand: 'macbook',
        name: 'Air 15',
        price: 500,
        category: 'laptop',
        rating: 5,
        img: 'https://img.5element.by/import/images/ut/goods/good_eb9dc94d-7028-11ef-8db4-005056012b6d/z1bq0009m-a3114-macbook-air-15-m3-8-10-8-512-space-gray-noutbuk-apple-1_600.jpg'
       },
  ]

function App () {
  const [inputName, setInputName] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [favoritesIds, setFavoritesIds] = useState([])

  const [openNavbar, setOpenNavbar] = useState(false)


  const filteredProduct = products.filter(
    (el) =>
       el.category.includes(selectedCategory) &&
       el.name.toLowerCase().includes(inputName.toLowerCase())
  )

  const handleInput = (text) => {
    setInputName(text)
  }

  const handleOpen = () => {
    setOpenNavbar(!openNavbar)
  }

  const handleChangeCategory = (changeCategory) => {
    if (changeCategory === selectedCategory) {
      setSelectedCategory("")
    } else {
      setSelectedCategory(changeCategory)
    }
  }

  const addToFavorites = (id) => {
    if (favoritesIds.includes(id)) {
      setFavoritesIds(favoritesIds.filter((i) => i !== id))
      return
    }
    setFavoritesIds([...favoritesIds, id])
  }

  const favoriteProducts = products.filter((product) =>
     favoritesIds.includes(product.id)
)

  return (
    <div>
      <Routes>
        <Route 
        path="/"
        element={
      <Main
        openNavbar={openNavbar}
        handleInput={handleInput}
        handleChangeCategory={handleChangeCategory}
        selectedCategory={selectedCategory}
        filteredProduct={filteredProduct}
        addToFavorites={addToFavorites}
        favoritesIds={favoritesIds}
        handleOpen={handleOpen}
        />
      }
      />
        <Route path="/favorite" element={<FavoritePage favoriteProducts={favoriteProducts}/>}/>
      </Routes>
    </div>
  );
}

export default App;
