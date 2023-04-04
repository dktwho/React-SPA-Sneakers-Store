
import React, { useState  } from 'react'
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss'

const Card = ({title, price, imageUrl, onAddFavorite, onPlus, id, favorited = false, added = false}) => {
  const [isAdded, setIsAdded] = useState(added)
  const [isFavorite, setIsFavorite] = useState(favorited)

  const onClickPlus = () => {
    onPlus({title, price, imageUrl, id})
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onAddFavorite({title, price, imageUrl, id})
    setIsFavorite(!isFavorite)
  }

  return (
    <div> 
      <div className={styles.card}>
      {/* <div className={styles.favorite}  onClick={onAddFavorite}  >
      <img className="favorite" onClick={() => onClickFavorite()} src={isFavorite ? "/img/liked.svg"  : "/img/unliked.svg"}   alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена</span>
          <b>{price} руб</b>
        </div>
          <img 
          className={styles.plus} 
          width={35} 
          height={35} 
          src={isAdded ? "/img/btn-checked.svg"  : "/img/plus.svg"} 
          alt="plus" 
          onClick={onClickPlus} 
          // onPlus={(obj) => console.log(obj)}
          />
      </div> */}

<ContentLoader 
    speed={3}
    width={155}
    height={265}
    viewBox="0 0 600 90"
    backgroundColor="#b3adad"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <rect x="1" y="0" rx="10" ry="10" width="150" height="155" />
    <rect x="0" y="167" rx="5" ry="5" width="150" height="15" />
    <rect x="0" y="187"rx="5" ry="5" width="100" height="15" />
    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
  </ContentLoader>
      </div>
    </div>
  )
}

export default Card


