import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";



const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: "/img/sneakers/a1.jpg",
  }, 
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 15600,
    imageUrl: "/img/sneakers/a2.jpg",
  }, 
  {
    title: 'Мужские Кроссовки Nike Cross S',
    price: 9100,
    imageUrl: "/img/sneakers/a3.jpg",
  }, 
  {
    title: 'Мужские Кроссовки Nike Magic ',
    price:11320,
    imageUrl: "/img/sneakers/a4.jpg",
  }, 
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >
        <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((el, id) => (
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


