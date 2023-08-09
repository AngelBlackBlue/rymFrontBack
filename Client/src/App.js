import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import style from './components/FondoHTML/FondoHTML.module.css'
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Favorites from './components/Favorites/Favorites.jsx'

function App() {
   
   const [characters, setCharacters] = useState([]);
   
   const onClose = (id) =>{setCharacters(characters.filter(character => character.id !== Number(id)))}
   
   const repeatedObject = (id) => { return !!(characters.find(character =>  character.id === Number(id))) }
  
   const onSearch = (id) => {
      
      if (repeatedObject(id)) { window.alert("Ya existe ese personaje"); return };
      if (!id) { window.alert("!Digite ID!"); return };

   //  axios(`https://rickandmortyapi.com/api/character/${id}`)
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({data}) => {
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data])
         } else {
            window.alert("No existe un personaje con ese ID")
         }
      })
      .catch((error) => {
         window.alert("No existe un personaje con ese ID ERROR")
      })

   } 
   
   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const simEmail = 'angel.blackblue@hotmail.com';
   const simPassword = 'angel123';

   const login = (userData)=> {
      if (userData.password === simPassword && userData.email === simEmail) {
         setAccess(true);
         navigate('/home');
      }

   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
         
         <div className={style.fondo}>
            { location.pathname === '/' ? null : <Nav onSearch={onSearch} setAccess={setAccess}/>} 
            <main className={style.main}>
            <Routes>
               <Route path='/' element={<Form login={login}/>}/>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/> 
               <Route path='/about'/>
               <Route path='/detail/:id' element={<Detail/>}/>
               <Route path='/favorites' element={<Favorites/>}/>
            </Routes> 
            </main> 
         </div>
         
   );
   
}

export default App;

