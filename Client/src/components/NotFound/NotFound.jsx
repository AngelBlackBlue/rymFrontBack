import style from './NotFound.module.css'

const NotFound = () => {

    return (
        <div className = {style.fondo}>
            <div className={style.flexContainer}>
              <h1 className = {style.text}>Errores 404 (Page Not Found)</h1>
            </div>
        </div>
    )

}


export default NotFound