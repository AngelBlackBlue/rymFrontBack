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

   const onClose = (id) => { setCharacters(characters.filter(character => character.id !== id)) }

   const repeatedObject = (id) => { return !!(characters.find(character => character.id === Number(id))) }


   const onSearch = async (id) => {

      if (repeatedObject(id)) { window.alert("Ya existe ese personaje"); return };
      if (!id) { window.alert("!Digite ID!"); return };


      try {

         let response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         setCharacters((oldChars) => [...oldChars, response.data])

      } catch (error) {

         window.alert("No existe un personaje con ese ID ERROR")

      }

   }

   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const login = async (userData, res)=> {


      try {

         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(URL + `?email=${email}&password=${password}`)
         // console.log(response.data)
         const { access } = response.data;
         // console.log(access)
         setAccess(access);
         access && navigate('/home');
         

      } catch (error) {

         return res.status(500).send(error.message)

      }

   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (

      <div className={style.fondo}>
         {location.pathname === '/' ? null : <Nav onSearch={onSearch} setAccess={setAccess} />}
         <main className={style.main}>
            <Routes>
               <Route path='/' element={<Form login={login} />} />
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
               <Route path='/about' />
               <Route path='/detail/:id' element={<Detail />} />
               <Route path='/favorites' element={<Favorites onClose={onClose} />} />
            </Routes>
         </main>
      </div>

   );

}

export default App;

