

function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer" >
          <h2 
          className="d-flex justify-between mb-30 ">Корзина
          <img className="removeBtn cu-p" src="/img/deleteItem.svg" alt="Delete" />
          </h2>
          
 
          <div className="items">

          <div className="cartItem d-flex align-center mb-20">
            <div 
              style={{ backgroundImage: 'url(/img/sneakers/a1.jpg)' }} 
              className="cartItemImg ">
            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/deleteItem.svg" alt="Delete" />
          </div>
          

          <div className="cartItem d-flex align-center mb-20">
            <div 
              style={{ backgroundImage: 'url(/img/sneakers/a2.jpg)'  }} 
              className="cartItemImg ">
            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/deleteItem.svg" alt="Delete" />
          </div>

            <div className="cartTotalBlock">
              <ul>
                <li >
                  <span>Итого</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li >
                  <span>Налог 5%</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
            </ul>

            <button className="greenButton" >Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
            </div>
          </div>
            
          




        </div>
      </div>

      <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30"><img width={18} height={18} src="/img/card.svg" alt=""/>
            <span>1205</span>
          </li>
          <li><img width={18} height={18} src="/img/user.svg" alt=""/></li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >
        <h1 className="">Все кроссовки</h1>
        <dir className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input type="text" placeholder="Поиск..." />

        </dir>
        </div>

        <div className="d-flex">

        <div className="card">
         <div className="favorite">
         <img src="/img/unliked.svg" alt="unliked" />
         </div>
          <img width={133} height={112} src="/img/sneakers/a1.jpg" alt="sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/a2.jpg" alt="sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/a3.jpg" alt="sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/a4.jpg" alt="sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;


