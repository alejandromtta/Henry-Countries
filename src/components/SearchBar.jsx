import React, { useEffect, useState } from "react";
import {
  getCountries,
  setAscDes,
  setOrder,
}from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";
import './SearchBar.module.css';
 export default function SearchBar() {
     let [countrie, setCountrie] = useState("")
 const [continent, setContinent] = useState(null);
 const [order, setOrd] = useState(null); 
 const [asc, setAsc] = useState(true); 
     const dispatch = useDispatch();
     
function handleCountrieChange (event) {
    let name = event.target.value;
    setCountrie(name)
}
 function handleSortChange(event) {
     let sort = event.target.value;
     setOrd(sort === "---" ? null : sort);
   }

   function handleOrdChange(event) {
     setAsc(event.target.value === "true" ? true : false);
   }
 function handleContinentChange(event) {
     let cont = event.target.value;
     setContinent(cont === "Continent" ? null : cont);
   }
      return(<form onSubmit ={(e)=>{
          e.preventDefault();
        
               dispatch(getCountries(countrie));
            ;
      }}>
<div className="filters">
          <span>Filters </span>
          <select onChange={(e) => handleContinentChange(e)}>
            <option>Continent</option>
            <option>Americas</option>
            <option>Europe</option>
            <option>Oceania</option>
            <option>Asia</option>
            <option>Africa</option>
          </select>
        </div>
          <input 
          type="text" 
          placeholder="Search...."
          onChange={(e) => handleCountrieChange(e)}
          />
          <input type="submit" value="Search"/>
<div>
<span>Order by: </span>
<select onChange={(e) => handleSortChange(e)}>
  <option>---</option>
  <option>Name</option>
  <option>Population</option>
  <option>Area</option>
</select>
<select onChange={(e) => handleOrdChange(e)}>
  <option value={true}>Asc</option>
  <option value={false}>Des</option>
</select>
</div>
          </form>)
 }

//  export default function SearchBar() {
//      const dispatch = useDispatch();
//      const [name, setName] = useState(null); 
   
   
//      const [activity, setActivity] = useState(null);
//      const activities = useSelector((state) => state.activities);
  
//      useEffect(() => {
//        dispatch(getCountries(name));

//      }, [name]);
    
//      useEffect(() => {
//        dispatch(setOrder(order));
//        dispatch(setAscDes(asc));
//      }, [order, asc])
  
//      function handleNameChange(event) {
//        let name = event.target.value;
//        setName(name);
//      }
    
  
//      function handleActivityChange(event) {
//        let act = event.target.value;
//        setActivity(act === "Activity" ? null : act);
//      }
  
  
  
//      return (
//        <form onSubmit={(e) => e.preventDefault()}>
        
//          <div className="input-cont">
//            <input
//              placeholder="Search by name..."
//              autoComplete="off"
//              value={name}
//              type="text"
//              onChange={(e) => handleNameChange(e)}
//            ></input>
//          </div>
       
//        </form>
//      );
//    }