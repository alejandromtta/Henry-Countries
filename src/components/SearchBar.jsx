import React, { useState } from "react";
import { getCountries } from "../redux/actions/TouristicActivities";
import { useDispatch } from "react-redux";

export default function SearchBar() {
    let [countrie, setCountrie] = useState("")
    const dispatch = useDispatch();
    return(<form onSubmit ={(e)=>{
        e.preventDefault();
        
             dispatch(getCountries(countrie));
          ;
    }}>
        <input 
        type="text" 
        placeholder="Search...."
        onChange={(event)=> setCountrie(event.target.value)}
        />
        <input type="submit" value="Search"/>
        </form>)
}