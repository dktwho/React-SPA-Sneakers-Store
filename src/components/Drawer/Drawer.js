import React, { useState } from 'react'
import axios from 'axios'

import Info from '../Info'
import { useCart } from '../../hooks/useCart'

import styles from './Drawer.module.scss'


const Drawer = ({onClose, items = [], onRemove, opened }) => {
  const {cartItems, setCartItems, totalPrice} = useCart()
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post('http://localhost:3030/orders', ...cartItems)
      await axios.put('http://localhost:3030/cart', [])
      setCartItems([])
      setOrderId(data.id)
      setIsOrderComplete(true)
    } catch (error) {
      // console.log('не удалось создать заказ')
    }
    setIsLoading(false)
  }

  return (
    <div>
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''} `} >
      <div className={styles.drawer} >
          <h2 
          className="d-flex justify-between mb-30 ">Корзина
          <img onClick={onClose} className="removeBtn cu-p" src="/img/deleteItem.svg" alt="Delete" />
          </h2>
          {
            items.length > 0 ? 
            <div className="items">
            {items.map((obj) => (
              <div key={obj.id}  className="cartItem d-flex align-center mb-20">
              <div 
                style={{ backgroundImage: `url(${obj.imageUrl})` }} 
                className="cartItemImg ">
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/deleteItem.svg" alt="Delete" />
            </div>
            ))}
          <div className="cartTotalBlock">
            <ul>
              <li >
                <span>Итого</span>
                <div></div>
                <b>{totalPrice}</b>
              </li>
              <li >
                <span>Налог 5%</span>
                <div></div>
                <b>{totalPrice / 100 * 5}</b>
              </li>
            </ul>

            <button 
              disabled={isLoading} 
              onClick={onClickOrder} 
              className="greenButton" >Оформить заказ 
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
            
            </div>
          </div> 
          : (
            <Info 
              title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая" }
              description={isOrderComplete ? `Ваш заказ № ${orderId.slice(1, 8)} скоро будет передан в службу доставки` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"}
              image={isOrderComplete ? "/img/orderDone.jpg" : "/img/cart-empty.jpg"}/>
          )
          }
        </div>
      </div>

    </div>
  )
}

export default Drawer
