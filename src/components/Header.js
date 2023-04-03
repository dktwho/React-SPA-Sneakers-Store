import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({ onOpenCart }) => {
  return (
    <div>
      <header className="d-flex justify-between align-center p-40" >
      <Link to='/'>
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин кроссовок</p>
          </div>
        </div>
        </Link>
        <ul className="d-flex">
          <li onClick={onOpenCart} className="mr-30 cu-p"><img width={18} height={18} src="/img/card.svg" alt="card"/>
            <span>1205</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to='/favorites'>
              <img width={18} height={18} src="/img/favoriteIcon.svg" alt="favorite"/>
            </Link>
          </li>
          <li><img width={18} height={18} src="/img/user.svg" alt="user"/></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
