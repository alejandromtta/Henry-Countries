import React, { useEffect, useState } from "react";
import {
getCountries,
setAscDes,
getActivity,
setContinentOrd
}from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";
import style from'./SearchBar.module.css';
export default function SearchBar() {
let [countrie, setCountrie] = useState("")
const [continent, setContinent] = useState(null);
const [order, setOrd] = useState({
  ord: ''
});
const dispatch = useDispatch();


function handleActivityChange(event) {
  let boleani = event.target.value;
dispatch(getActivity(boleani))
}
function handleCountryChange (event) {
let name = event.target.value;
setCountrie(name)
}
function handleSortChange(event) {
setOrd({ord: event.target.value});
}

function handleOrdChange(event) {
  let ascOption ={
    asc: event.target.value
  }
dispatch(setAscDes(order,ascOption))
}
function handleContinentChange(event) {
let cont = event.target.value;
setContinent(cont === "Continent" ? null : cont);
dispatch(setContinentOrd(cont))
}
return(<form className={style.container} onSubmit={(e)=>{
  e.preventDefault();

  dispatch(getCountries(countrie));
  ;
  }}>
  <div >
    <span>Filters </span>
  <select onChange={(e)=> {handleContinentChange(e)}}>
      <option>americas</option>
      <option>europe</option>
      <option>oceania</option>
      <option>asia</option>
      <option>africa</option>
    </select>
    <select onChange={(e)=> {handleActivityChange(e)}}>
    <option value={false}>----</option>
      <option value={true}>activity</option>
      </select>
  </div>
  <input type="text" placeholder="Search...." onChange={(e)=> handleCountryChange(e)}
  />
  <input type="submit" value="Search" />
  <div>
    <span>Order by: </span>
    <select onChange={(e)=> handleSortChange(e)}>
      <option key={0}>---</option>
      <option key={1}>Name</option>
      <option  key={2}>Population</option>
      <option  key={3}>Area</option>
    </select>
    <select onChange={(e)=> handleOrdChange(e)}>
    <option>---</option>
      <option >Asc</option>
      <option >Des</option>
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