import axios from "axios"
import { useState } from "react"
import {useParams} from "react-router-dom"
import React from "react"

           
export default function SpecificCountrie (){
    let [countries, setCountries] = useState([])
    let {id} = useParams()
    
React.useEffect (() => {
obtenerDatos()
},[])

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
        <img src={c.flag}/>
        <h1>{c.name}</h1>
        <p>{c.continent}</p>
               </div>   
                } )}
        
                 </div> )

}