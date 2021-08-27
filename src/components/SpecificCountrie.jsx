import style from "./SpecificCountrie.module.css"
import {useParams} from "react-router-dom"
import React, { useEffect } from "react";
import { getCountries } from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";
import footer from '../components/img/icons/footer.png'
export default function SpecificCountrie (){
const dispatch = useDispatch();
let countries = useSelector((state) => state.countries);
let {id} = useParams()
countries = countries.filter(Boolean);
useEffect( () => {
dispatch(getCountries(null, id));
}, []);



return(
<div className={style.container}>
    {countries.map( (c, i) => {
    return <div key={i} className={style.subContainer}>
        <img className={style.flag} src={c.flag} alt={c.name} />
        <h1 className={style.h1}>{c.name}</h1>

        <p>Alpha Code: {c.ID}</p>
        <p>Continent: {c.continent}</p>
        <p>Capital: {c.capital}</p>
        <p>Subregion: {c.subregion}</p>
        <p>Area: {c.area}</p>
        <p>Population: {c.population} habitants.</p>
        <p>{c.TouristicActivitys? c.TouristicActivitys.map(d => {
            return <div>
                <h3>Touristic Activity: {d.name}</h3>
                <p>Dificult: {d.dificult}</p>
                <p>Duration: {d.duration}</p>
                <p>Season: {d.season}</p>
            </div>
            }) : 'no'}</p>
    </div>
    } )}
    <img className={style.footer} src={footer} alt="footer" />
</div> )

}