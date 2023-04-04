import React from "react";
import AppContext from "../context";

const Info = ({ title, image, desctiption }) => {
  const { setCartOpened, setCartItems } = React.useContext(AppContext);
  return (
    <>
      <div className="cartEmpty d-flex align-center justify-content flex-column flex">
        <img className="mb-20" width={120}  src={image} alt="" />
        <h2>Корзина пустая</h2>
        <p className="opacity-6">
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>
        <button onClick={() => setCartOpened} className="greenButton">
          <img src="/img/arrow.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </div>
    </>
  );
};

export default Info;
