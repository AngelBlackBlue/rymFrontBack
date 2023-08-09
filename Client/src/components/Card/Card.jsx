import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

// export default function Card({id, name, status, species, gender, origin, image, onClose}) {
const  Card = ({id, name, image, gender, onClose, addFav, removeFav, myFavorites}) => {

   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, image, gender});
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.divContainer}>
         <button onClick={handleFavorite} className={style.kokoro}>{isFav ? '❤️' : '🤍'}</button>       
         <button onClick={()=>{onClose(id)}} className={style.Button}>X</button>
         <div>
            <img src={image} alt='' className={style.imagen}/>
         </div>
         <div >
           <Link to={`/detail/${id}`} className={style.nameDiv}> <h2 >{name}</h2> </Link>
         </div>
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }

};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch (addFav(character))},
      removeFav: (id) => { dispatch (removeFav(id))}
   }
};

export default connect (mapStateToProps, mapDispatchToProps)(Card);
