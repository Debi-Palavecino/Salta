import { Link } from "react-router-dom"
const Nav = ()=>{
    return(
        <div>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/Lugares">Lugares</Link>
            </button>
            <button>
                <Link to="/Historia">Historia</Link>
            </button>
            <button>
                <Link to="/AboutMe">About me</Link>
            </button>

        </div>
    )
}
export default Nav