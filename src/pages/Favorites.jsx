import React from "react";
import Card from "../components/Card/Card";

const Favorites = ({ items, onAddFavorite }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="">Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item, id) => (
          <Card
            key={id}
            favorited={true}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onAddFavorite={onAddFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
