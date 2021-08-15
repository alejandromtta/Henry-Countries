import {Link} from "react-router-dom"
import Style from "./NavBar.module.css"
export default function NavBar(){

    return(
        <nav className={Style.nav}>
            <Link  to="/home">
            <button className={Style.btn}>Home</button>
            </Link>
            <Link to="/./touristicForm">
            <button className={Style.btn} > Touristic Activity</button>
            </Link>
            <Link to="/./about">
            <button className={Style.btn} >About</button>
            </Link>
            <Link to="/./api">
            <button className={Style.btn}>Api</button>
            </Link>
        </nav>
    )
}