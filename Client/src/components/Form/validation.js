

const validation = ({email, password}) => {

    const errors = {};

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const almenosUnNumero = /\d/;
    const cantCaracteres = /^.{6,10}$/; //expresión REGEX
    
    if (!regexEmail.test(email)) errors.email = "El nombre de usuario tiene que ser un email"; 
    if(!email.length) errors.email = 'El nombre de usuario no puede estar vacío';
    if(email.length > 35) errors.email = 'El nombre de usuario no puede tener más de 35 caracteres.';

    if(!almenosUnNumero.test(password)) errors.password = 'La contraseña tiene que tener al menos un número.';
    if(!cantCaracteres.test(password)) errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
    

    return errors;

};  

export default validation;