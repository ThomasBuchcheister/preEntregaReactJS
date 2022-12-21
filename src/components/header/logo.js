import logo from "../../img/logo1.png";
import { Link } from "react-router-dom"

const Logo = () => {
    return(
        <Link to="/">
            <img src={logo} alt="D10S Indumentaria" title="D10S Indumentaria"></img>
        </Link>
    )
}

export default Logo;