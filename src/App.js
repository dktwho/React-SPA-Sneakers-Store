import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";






function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://6424261bd6152a4d4807c7ae.mockapi.io/items')
    .then(response => response.json())
    .then(json => setItems(json))
  }, [])

  console.log(items)

  return (
    <div className="wrapper clear">
      {cartOpened ?   <Drawer onClose={() => setCartOpened(false)} /> : null }
      <Header onOpenCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >
        <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((el, id) => (
          <Card 
            key={id} 
            title={el.title}
            price={el.price} 
            imageUrl={el.imageUrl} 
            onFavorite={() => console.log('add favorite')}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


