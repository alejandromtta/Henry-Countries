
import React, { useEffect, useState } from "react";
import { getActivities, getCountries } from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";
import Countries from './Countries'
import SearchBar from './SearchBar'
import axios from 'axios'


export default   function HomePage (){
    let [countries, setCountries] = useState([])
   


    function onSearch (countrieSearch) {
        if(countrieSearch) {
            axios.get(`http://localhost:3000/countries?name=${countrieSearch}`).then(response =>  {
                const countrie = response.data
             setCountries(oldCountrie => [countrie])  
             })
        } else {
           axios.get('http://localhost:3000/countries').then(response =>  {
               const countrie = response.data
            setCountries(oldCountrie => [countrie])  
            }
              )}}
console.log(countries)
return(
    <div> 
        <SearchBar onSearch={onSearch}/>
        <Countries countries={countries}/>
    </div>
)

}