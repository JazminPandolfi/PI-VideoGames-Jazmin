import Landing from "../../assets/img/Landing.jpg"
import Button from "./Button"
import style from "./landing.module.css"

const LandingPage = ()=>{
    return(
        <div className={style.conteiner}>
            <img src={Landing} alt="Imagen de fondo" />
            <div className={style.bienvenida}>
                <div className={style.h1}>
                    <h1>Encontra los mejores juegos!</h1>
                    <div className={style.button}>
                    <Button name="Inicio"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LandingPage;