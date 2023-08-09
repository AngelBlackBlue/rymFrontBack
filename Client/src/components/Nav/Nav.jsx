import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import {NavLink, useNavigate} from 'react-router-dom'; 
import logo from '../img/Rick-And-Morty-Transparent-File.png'

export default function Nav({onSearch, setAccess}, ) { 
   
   const navigate = useNavigate();

   const handleLogOut = () => {
      setAccess(false);
      navigate('/');
   };
    
   return (
      <div className={style.nav} >
         <img src={logo} alt="" className={style.imgLogo}/>
         <button className={style.myButton}>
            <NavLink to={'/home'} className={style.navLink} >Home</NavLink>
         </button>
         <button className={style.myButton}>
            <NavLink to={'/about'} className={style.navLink} >About</NavLink>
         </button>
         <button className={style.myButton}>
            <NavLink to={'/favorites'} className={style.navLink} >Favorites</NavLink>
         </button>
            <SearchBar onSearch={onSearch}/>
         <button className={style.myButton} onClick={handleLogOut} >Log out</button> 
      </div>
   );
}

//