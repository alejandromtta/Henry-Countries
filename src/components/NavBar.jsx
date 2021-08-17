import {Link} from "react-router-dom"
import { getCountries }from "../redux/actions/TouristicActivities";
import { useDispatch} from "react-redux";
import Style from "./NavBar.module.css"

export default function NavBar(){
let dispatch = useDispatch();
    return(
        <nav className={Style.nav}>
            <Link  to="/home">
            <button className={Style.btn} onClick={(e) => { dispatch(getCountries());}}>Home</button>
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