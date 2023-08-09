import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from './Favorite.module.css'

const Favorites = ({myFavorites}) => { 

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event)=> {
        dispatch(orderCards(event.target.value))
        setAux(!aux);
    };

    const handleFilter = (event)=> {
        dispatch(filterCards(event.target.value))
    };

    return(
        <div>
            <div className={style.fistDiv} > 
               <select onChange={handleOrder}>
                 <option value="A" >Ascendente</option>
                 <option value="D" >Descendente</option>
               </select>
               <select onChange={handleFilter}> 
                 <option value="Male"  >Male</option>
                 <option value="Female" >Female</option>
                 <option value="Genderless" >Genderless</option>
                 <option value="unknown" >unknown</option>
                 <option value="todos" >todos</option>
               </select>
            </div>
     
            <div className={style.div}>
                {
                  myFavorites?.map(({id, name, image, gender}) => {
                    return (
                       <Card 
                           key={id}
                           id={id}
                           name={name}
                           image={image}
                        />
                    )
                  })
                }
            </div>
        </div>

    );

};

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites,
    }

};



export default connect(mapStateToProps, null)(Favorites)