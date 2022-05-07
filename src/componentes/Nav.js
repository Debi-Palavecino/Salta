import "../styles/NavStyle.css"

const Nav = ({handleClickAbrirModal})=>{
    return(
        <div className="Container">
            <div className="boxConteiner">
                <div className="logoSalta">
                    <img alt="Logo De Salta" src="http://turismosalta.gov.ar/images/logo-turismo-salta.png"/>
                </div>
                <div className="box">
                    <h2>Places</h2>
                </div>
                <div className="box">
                    <h2>What to do</h2>
                </div>
                <div onClick={handleClickAbrirModal} className="box">
                    <h2>History</h2>
                </div>
            </div>
        </div>
    )
}
export default Nav