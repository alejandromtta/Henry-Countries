import React, { useEffect, useState } from "react";
import { getCountries } from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar({onSearch}) {
    let [countrie, setCountrie] = useState("")
    const dispatch = useDispatch();
    console.log(countrie)
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