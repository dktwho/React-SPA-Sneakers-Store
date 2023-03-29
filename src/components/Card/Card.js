
import React, { useState  } from 'react'
import styles from './Card.module.scss'

const Card = ({title, price, imageUrl, onFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () => {
    onPlus({title, price, imageUrl})
    setIsAdded(!isAdded)
  }

  return (
    <div> 
      <div className={styles.card}>
      <div className={styles.favorite}  onClick={onFavorite}  >
      <img src="/img/unliked.svg" alt="unliked" />
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
      </div>
      </div>
    </div>
  )
}

export default Card


