import React, { useEffect, useState, useContext } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import AppContext from "../context";

const Orders = () => {
  const { onAddFavorite, onAddToCart } = useContext(AppContext);

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3030/orders");
        setOrders(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error to orders");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="">Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(12)] : orders).map((item, id) => (
          <Card
            key={id}
            onAddFavorite={(obj) => onAddFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
            hidden
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
