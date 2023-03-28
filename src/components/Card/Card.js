
import React from 'react'
import styles from './Card.module.scss'

const Card = ({title, price, imageUrl}) => {

  return (
    <div> 
      <div className={styles.card}>
      <div className={styles.favorite}>
      <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена</span>
          <b>{price} руб</b>
        </div>
        <button className="button">
          <img width={13} height={13} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
      </div>
    </div>
  )
}

export default Card


