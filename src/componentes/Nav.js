import { Link } from "react-router-dom"
import "../styles/NavStyle.css"

const Nav = ({handleClickAbrirModal})=>{
    return(
        <div className="Container">
            <div className="logoSalta">
                    <img alt="Logo De Salta" src="http://turismosalta.gov.ar/images/logo-turismo-salta.png"/>
            </div>
            <div className="boxConteiner">
                <button className="box"><Link style={{color:"black",}} className="link" to={"/Lugares"}>Places</Link></button>
                <button className="box"><Link style={{color:"black",}} to={"/QueHacer"}>What to do</Link></button>
                <button onClick={handleClickAbrirModal} className="box"><Link style={{color:"black",}} to={"/Historia"}>History</Link></button>
            </div>
        </div>
    )
}
export default Nav