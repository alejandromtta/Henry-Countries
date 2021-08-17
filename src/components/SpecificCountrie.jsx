import axios from "axios"
import { useState } from "react"
import {useParams} from "react-router-dom"
import React from "react"


export default function SpecificCountrie (){
let [countries, setCountries] = useState([])
let {id} = useParams()

React.useEffect (() => {
obtenerDatos()
},[])s

const obtenerDatos = async () => {
const data = await axios.get(`http://localhost:3000/countries/${id}`)
setCountries(oldCountrie => data.data)

}
const prueba = JSON.stringify(countries)
console.log(countries)

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