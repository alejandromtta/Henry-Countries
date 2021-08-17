
import { NavLink as Link }  from 'react-router-dom';
import World from '../components/img/World.png'
let style = require('./LandingPage.module.css')

export default function LanginPage () {
    return(
        <header>
            <div className={style.container}>
            <img className={style.img}src={World} 
                type="png"
                alt="countries, countries_img, paises, continentes, mapamundi"/>
                <div className ={style.welcome}>
            <h4 className={style.h4}>Find information about countries,<br/>
             continents, population and create your own< br/>
              touristic activities that  do you  want to do in your <br/>
              favorite country.</h4>
                <Link to="/home">
                   
                <button className={style.bttn}><h2>Continue...</h2></button>
                </Link>
                
                </div>
               
            </div>
        </header>
    )
}

