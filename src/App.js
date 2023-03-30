import Card from "./components/Card/Card";
import axios from 'axios'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";


function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axios.get('https://6424261bd6152a4d4807c7ae.mockapi.io/items')
    .then(res => {setItems(res.data)})
    axios.get('https://6424261bd6152a4d4807c7ae.mockapi.io/Cart')
    .then(res => {setCartItems(res.data)})
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://6424261bd6152a4d4807c7ae.mockapi.io/Cart', obj)
    setCartItems((prev) => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6424261bd6152a4d4807c7ae.mockapi.io/Cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onAddFavorite = (obj) => {
    // axios.post('https://6424261bd6152a4d4807c7ae.mockapi.io/favorites', obj)
    // setFavorites((prev) => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value) 
  }

  return (
    <div className="wrapper clear">
      {cartOpened ?   <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)} /> : null }
      <Header onOpenCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >
        <h1 className="">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && <img onClick={() => setSearchValue('')}  className="clear cu-p" src="/img/deleteItem.svg" alt="clear" />}
            <input value={searchValue}  onChange={onChangeSearchInput} type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((item, id) => (
          <Card 
            key={id} 
            title={item.title}
            price={item.price} 
            imageUrl={item.imageUrl} 
            onFavorite={(obj) => onAddFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


