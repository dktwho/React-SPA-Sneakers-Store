import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios'
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import  AppContext  from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';


function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
   async function fetchData() {

    try {
      const cartResponse  = await axios.get('http://localhost:3030/cart')
      const favoritesResponse  = await axios.get('http://localhost:3030/favorites')
      const itemsResponse = await axios.get('http://localhost:3030/item')

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    } catch (error) {
      console.log('error request data ;(')
    }
   }
   fetchData()
  }, [])
  
  const onAddToCart = async (obj) => {
    try {
      if(cartItems.find((item) => item.id === obj.id)) {
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id))
        await axios.delete(`http://localhost:3030/cart/${obj.id}`)
      } else {
        setCartItems((prev) => [...prev, obj])
        await axios.post('http://localhost:3030/cart', obj)
      }
    } catch (error) {
      // console.log('error axios to cart', error.message)
    }
  }

  const onRemoveItem =  (id) => {
    try {
       axios.delete(`http://localhost:3030/cart/${id}`)
      setCartItems((prev) => prev.filter(item => item.id !== id))
    } catch (error) {
      console.log('error remove cart item')
    }
  }

  const onAddFavorite = async (obj) => {
    try {
      if(favorites.find((favObj) => favObj.id === obj.id )) {
        axios.delete(`http://localhost:3030/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter(item => item.id !== obj.id))
      } else {
      const { data } = await axios.post('http://localhost:3030/favorites', obj)
      setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      //console.log('error axios to favorites',  error.message)
    }
  }
    
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value) 
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.id === id)
  }

  return (
    <AppContext.Provider value={{ favorites, items, cartItems, isItemAdded, setCartOpened, setCartItems, onAddFavorite, onAddToCart }}>
      <div className="wrapper clear">

        <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)}  opened={cartOpened}/>
      {/* {cartOpened ?    : null } */}
      <Header onOpenCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/" element={<Home items={items}  isLoading={isLoading} cartItems={cartItems} searchValue={searchValue} setSearchValue={setSearchValue} onAddToCart={onAddToCart} onAddFavorite={onAddFavorite} onChangeSearchInput={onChangeSearchInput} />} />
        <Route path="/favorites" element={<Favorites items={favorites} onAddFavorite={onAddFavorite} />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
    </AppContext.Provider>
    
  );
}

export default App;


