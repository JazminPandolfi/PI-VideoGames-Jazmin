import LogoOP1 from "../../assets/img/Logo.png"
import { Link } from "react-router-dom"
import style from  "./nav.module.css"

const Nav = () =>{
    return (
        <div className={style.navconteiner}>
            <div className={style.image}>
                <img src={LogoOP1} alt="logo videogame" />
            </div>
            <div className={style.links}>
                <Link to ={"/home"}>
                    <h2 className={style.h2}>Home</h2>
                </Link>
            
            </div>
        </div>
    )
}

export default Nav;