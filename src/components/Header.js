import React from 'react'

const Header = ({ onOpenCart }) => {
  return (
    <div>
      <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={onOpenCart} className="mr-30 cu-p"><img width={18} height={18} src="/img/card.svg" alt=""/>
            <span>1205</span>
          </li>
          <li><img width={18} height={18} src="/img/user.svg" alt=""/></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
