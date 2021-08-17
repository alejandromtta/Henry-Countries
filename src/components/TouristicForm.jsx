import React, { useEffect, useState } from "react";
import { getCountries, getCountriesID } from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";

export default function TouristicForm () {
    let [activity, setActivity] = useState({
        name: '',
        dificult: '',
        duration: '',
        season: '',
        countries: []
    })
    let a = ''
    const handleInputChange = (e) => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    }
    console.log(activity)
     return (
         <form onSubmit={(e) => { e.preventDefault()
        
        }}
        >
            <label>Name of your touristic activity: </label>
             <input
              type="text"
              name= 'name'
              placeholder="Name of the activity..."
              onChange={handleInputChange}
              value={activity.name}
            />
            <label> Dificult: </label>
            <input 
            type="number"
            name="dificult"
            placeholder='dificult'
            onChange={handleInputChange}
            value={activity.dificult}
            />
            <label>Duration: </label>
            <input 
            type="text" 
            name="duration"
            placeholder="Duration..."
            onChange={handleInputChange}
            value={activity.duration}
            />
            <label>Season: </label>
            <select 
            name="season"
            onChange={handleInputChange}
            value={activity.season} >
                <option>---</option>
                <option>spring</option>
                <option>summer</option>
                <option>winter</option>
                <option>autumn</option>
            </select>
            <label>Countrie: </label>
           
            <label>  <input  
            type="checkbox"
            id="check"/> uwu </label>
             <input type="submit" value="create"/>
         </form>
     )
}