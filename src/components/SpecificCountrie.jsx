import axios from "axios"
import { useState } from "react"
import {useParams} from "react-router-dom"
import React, { useEffect } from "react";
import { getCountries } from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";

export default function SpecificCountrie (){
    const dispatch = useDispatch();
const countries = useSelector((state) => state.countries);
let {id} = useParams()

useEffect( () => {
     dispatch(getCountries(null, id));
  }, []);



return(
<div>
    {countries.map( c => {
    return <div>
        <img src={c.flag} />
        <h1>{c.name}</h1>

        <p>Alpha Code: {c.ID}</p>
        <p>Continent: {c.continent}</p>
        <p>Capital: {c.capital}</p>
        <p>Subregion: {c.subregion}</p>
        <p>Area: {c.area}</p>
        <p>Population: {c.population} habitants.</p>
        <p>{c.TouristicActivitys? c.TouristicActivitys.map(d => {
            return <div>
                <p>Touristic Activitie: {d.name}</p>
                <p>Dificult: {d.dificult}</p>
                <p>Duration: {d.duration}</p>
                <p>Season: {d.season}</p>
            </div>
            }) : 'no'}</p>
    </div>
    } )}

</div> )

}