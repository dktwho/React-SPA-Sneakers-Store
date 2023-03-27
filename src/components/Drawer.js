

import React from 'react'

const Drawer = () => {
  return (
    <div>
      <div className="overlay" style={{display: 'none'}}>
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

    </div>
  )
}

export default Drawer