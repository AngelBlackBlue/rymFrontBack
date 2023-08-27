import style from './About.module.css'
import imagen from '../img/Angel.jpeg'
import gif from '../img/AjA6.gif'


const About = () => {

    return (
        <div className={style.firstDiv}>
            <div className={style.detailTex}>
                <h1>Angel Suarez</h1>
                <h3>Status: Alive</h3>
                <h3>Specie: Desarrollador Full Stack</h3>
                <h3>Gender: Male</h3>
                <h3>Origin: Henry</h3>
            </div>
            <div className={style.gifCenter} >
                <img src={gif} alt="" className={style.gif} />
            </div>
            <div className={style.imageDiv}>
                <img src={imagen} alt='' className={style.image} />
            </div >
        </div>
    )

}


export default About