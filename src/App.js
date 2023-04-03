import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { useEffect, useState } from "react";

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3030/item')
    .then(res => {setItems(res.data)})
    axios.get('http://localhost:3030/cart')
    .then(res => {setCartItems(res.data)})
    axios.get('http://localhost:3030/favorites')
    .then(res => {setFavorites(res.data)})
  }, [])
  
  
  const onAddToCart = (obj) => {
    axios.post('http://localhost:3030/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3030/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onAddFavorite = async (obj) => {
    try {
      if(favorites.find((favObj) => favObj.id === obj.id )) {
        axios.delete(`http://localhost:3030/favorites/${obj.id}`)
        // ! setFavorites((prev) => prev.filter(item => item.id !== obj.id))
      } else {
      const { data } = await axios.post('http://localhost:3030/favorites', obj)
      setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      
    }
  }
    
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value) 
  }

  return (
    <div className="wrapper clear">
      {cartOpened ?   <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)} /> : null }
      <Header onOpenCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/" element={<Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onAddToCart={onAddToCart} onAddFavorite={onAddFavorite} onChangeSearchInput={onChangeSearchInput} />} />
        <Route path="/favorites" element={<Favorites items={favorites} onAddFavorite={onAddFavorite} />} />
      </Routes>
    </div>
  );
}

export default App;


