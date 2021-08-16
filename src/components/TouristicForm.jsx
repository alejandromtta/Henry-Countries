import React, { useEffect, useState } from "react";
import { getCountries } from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";

export default function TouristicForm () {
    let [activity, setActivity] = useState([{
        name: ''
    }])
    let a = ''
    console.log(activity)
     return (
         <form onSubmit={(e) => { e.preventDefault()
        
        }}>
             <input
              type="text"
              placeholder="Name of the activity..."
              onChange={(e) => a = e.target.value}
            />
             <input type="submit" value="Search"/>
         </form>
     )
}