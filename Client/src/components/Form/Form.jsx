import React from "react";
import style from './Form.module.css'
import gif2 from '../img/Z4aV.gif'
import { useState } from "react";
import validation from "./validation";


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password:'',
    });

    const [errors, setErrors] = useState({
        email: '',
        password:'',
    });

    const handleChange = (event) =>{
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(validation({...userData, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      login(userData);
    }

    

    return(
        <div className={style.first}> 
        <div className={style.DivPrincipal}>
           <form onSubmit={handleSubmit}> 
               <div>
                <img src={gif2} alt='hola' className={style.gif}/>
               </div>
              <div className={style.contenedor}>
                    <label className={style.labels}>Email</label>
                    <input name='email' placeholder="Ingrese su email...." type="email" value={userData.email} onChange={handleChange} className= {style.inputs}/>
                    <label className={style.labels}>Password</label>
                    <input name='password' placeholder="Digite su clave..." type="password" value={userData.password} onChange={handleChange}    className={errors.password && style.warning}/>
                              
                  <div className={style.buttonDiv}>
                    <button type="submit"className={style.myButton} >Submit</button>
                  </div>
               </div>
               {errors.email && <p className={style.danger}>{errors.email}</p>}
               {errors.password && <p className={style.danger}>{errors.password}</p>}
            </form>
        </div> 
        </div>  
    )

};

export default Form;

