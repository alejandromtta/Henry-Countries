import { NavLink as Link } from 'react-router-dom';
import World from '../components/img/Group.png'
import icon1 from '../components/img/icons/icon1.png'
import icon2 from '../components/img/icons/icon2.png'
import icon3 from '../components/img/icons/icon3.png'
import icon4 from '../components/img/icons/icon4.png'
import footer from '../components/img/icons/footer.png'
let style = require('./LandingPage.module.css')

export default function LanginPage () {
return(
<div className={style.master}>
    <div className={style.container}>
        <div className={style.sources}>
            <img className={style.img}src={World} type="png"
                alt="countries, countries_img, paises, continentes, mapamundi" />
        </div>
        <div className={style.welcome}>
            <h1 className={style.tittle}>Henry Countries</h1>
            <h4 className={style.h4}>Find information about countries,continents, population,etc.
                Create a touristic activities that do you want do to in diferents countries.</h4>
            <Link to="/home">

            <button className={style.bttn}>
                <p>Get Started</p>
            </button>
            </Link>

        </div>

    </div>
    <div className={style.featuresMaster}>
        <h3 className={style.features}> Features</h3>
        <div className={style.featuresContainer}>

            <div className={style.divs}>
                <img className={style.icons} src={icon1} alt='icon1' />
                <h4>Countries</h4>
                <p>Information about Population, Continent, Alpha Code, Capital, Sub Region, Area and your Touristic
                    Activities.</p>
            </div>
            <div className={style.pAddTouristicActivity} className={style.divs}>
                <img src={icon2} alt='icon1' />
                <h4>Add Touristic Activities</h4>
                <p className={style.pAddTouristicActivity}>Create your own activity with a name, diffcult, season and
                    duration.</p>
            </div>
            <div className={style.divs}>
                <img src={icon3} alt='icon1' />
                <h4>Filter</h4>
                <p>You can filter the countries by Continent, Name, Population, Area and Touristic Activity. </p>
            </div>
            <div className={style.divs}>
                <img src={icon4} alt='icon1' />
                <h4>Api</h4>
                <p>The documentation about our api.</p>
            </div>
        </div>
    </div>
    <img src={footer} className={style.footer} alt="footer" />
</div>
)
}
