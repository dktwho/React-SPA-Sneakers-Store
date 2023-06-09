
import React, { useState  } from 'react'
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss'
import AppContext from '../../context'

const Card = ({title, price, imageUrl, onAddFavorite,  onPlus, id, favorited = false, added = false, loading = false}) => {
  // const [isAdded, setIsAdded] = useState(added)
  const [isFavorite, setIsFavorite] = useState(favorited)
  const {isItemAdded} = React.useContext(AppContext)

  const onClickPlus = (obj) => {
    onPlus({title, price, imageUrl, id})
    // setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onAddFavorite({title, price, imageUrl, id})
    setIsFavorite(!isFavorite)
  }

  return (
    <div> 
      <div className={styles.card}>
        {loading ? <ContentLoader 
    speed={3}
    width={165}
    height={250}
    viewBox="0 0 600 90"
    backgroundColor="#b3adad"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
    <rect x="0" y="167" rx="5" ry="5" width="150" height="15" />
    <rect x="0" y="187"rx="5" ry="5" width="100" height="15" />
    <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
    <rect x="124" y="230" rx="10" ry="10" width="35" height="35" />
  </ContentLoader>  : 
  <>
   {onAddFavorite &&  
      <div className={styles.favorite}  onClick={onAddFavorite}  >
        <img className="favorite" onClick={() => onClickFavorite()} src={isFavorite ? "/img/liked.svg"  : "/img/unliked.svg"}   alt="unliked" />
      </div>}
     
      <img width='100%' height={140} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена</span>
          <b>{price} руб</b>
        </div>
         { onPlus &&  <img 
          className={styles.plus} 
          width={35} 
          height={35} 
          src={isItemAdded(id) ? "/img/btn-checked.svg"  : "/img/plus.svg"} 
          alt="plus" 
          onClick={() => onClickPlus()} 
          />}
      </div> 
       </> }
       </div>
    </div>
  )
}

export default Card


