import {Link} from "react-router-dom"
import { getCountries }from "../redux/actions/TouristicActivities";
import { useDispatch} from "react-redux";
import Style from "./NavBar.module.css"
import World from "./img/World.png"
export default function NavBar(){
let dispatch = useDispatch();
    return(
        <nav className={Style.nav}>
            <div className={Style.container}> 
            <div className={Style.titleContainer}>
                <img className={Style.img} src={World} alt="icon"/>
                <h4 className={Style.tittle}> HENRY COUNTRIES</h4>
            </div>
            <div className={Style.btnContainer}>

            
            <Link  to="/">
            <button className={Style.btn} onClick={(e) => { dispatch(getCountries());}}><h4>Home</h4></button>
            </Link>
            <Link  to="/home">
            <button className={Style.btn} onClick={(e) => { dispatch(getCountries());}}><h4>Countries</h4></button>
            </Link>
            <Link to="/./touristicForm">
            <button className={Style.btn} > <h4>Add Touristic Activity</h4></button>
            </Link>
            
            <Link to="/./api">
            <button className={Style.btn}><h4>Api</h4></button>
            </Link>
            <Link to="/./about">
            <button className={Style.btn} ><h4>About</h4></button>
            </Link>
            </div>
            </div>
        </nav>
    )
}