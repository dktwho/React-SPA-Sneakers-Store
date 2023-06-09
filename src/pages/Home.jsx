import React from "react";
import Card from "../components/Card/Card";

const Home = ({
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  items,
  onAddFavorite,
  onAddToCart,
  cartItems,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems =
      items &&
      items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, id) => (
      <Card
        key={id}
        onAddFavorite={(obj) => onAddFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        // added={cartItems.some((obj) => obj.id === item.id)}
        // added={isItemAdded(item && item.id)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="">
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/deleteItem.svg"
              alt="clear"
            />
          )}
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
