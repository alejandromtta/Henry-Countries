import React, { useEffect, useState } from "react";
import  postActivity from "../functions/functions"
import { getCountries, getCountriesID } from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";
import style from './TouristicForm.module.css'
export default function TouristicForm () {
    const dispatch = useDispatch();
    const countriesName = useSelector((state) => state.countriesName);
    useEffect( () => {
         dispatch(getCountriesID());
      }, []);
      
    let [activity, setActivity] = useState({
        name: '',
        dificult: 0,
        duration: '',
        season: '',
        nameCountrie: []
    })
    const onChangeOptions = (e) => {
        const options = e.target.options;
        const selects = [];
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selects.push(options[i].value);
          }      
        }    
       return setActivity({
            ...activity,
           nameCountrie: selects
        })
      }
    

    const handleInputChange = (e) => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    }

     return (
        <div className={style.container}>
         <form onSubmit={(e) => {
             e.preventDefault();
            postActivity(activity)
            alert('activity created')
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
            {/* <input 
            type="number"
            name="dificult"
            min='0'
            max='5'
            placeholder='dificult'
            onChange={handleInputChange}
            value={activity.dificult}
            /> */}
            <select 
            type="number"
            name="dificult"
            onChange={handleInputChange}
            value={activity.dificult}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
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
           <p>multiple select with ctrl</p>
            <select  multiple
            name="countries"
            onChange={onChangeOptions}
            >
                  {countriesName.map((e, i) => {
                      return (<option value={e.id}key={i}>{e.country}</option>)
                  })}
            </select>
            <p>paises seleccionados: {activity.nameCountrie.map((e, i) => { return <p key={i}>{e}</p>})}</p> 
             <input type="submit" value="create"/>
         </form>
         <p></p>
         </div>
     )
}