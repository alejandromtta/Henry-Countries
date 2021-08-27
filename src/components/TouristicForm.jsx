import React, { useEffect, useState } from "react";
import postActivity from "../functions/functions"
import { getCountries, getCountriesID } from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";
import style from './TouristicForm.module.css'
import footer from '../components/img/icons/footer.png'
export default function TouristicForm () {
const dispatch = useDispatch();
let [btn, setBtn] = useState(true)
const countriesName = useSelector((state) => state.countriesName);
useEffect( () => {
dispatch(getCountriesID());
}, []);
const countries = useSelector((state) => state.countries)
let [activity, setActivity] = useState({
name: '',
dificult: 0,
duration: '',
season: '',
nameCountries: []
})
const onChangeOptions = (e) => {
const options = e.target.options;
const selects = [];
for (let i = 0; i < options.length; i++) { if (options[i].selected) { selects.push(options[i].value); } } return
    setActivity({ ...activity, nameCountries: selects }) } 
    const bttnEnabled=(e)=> {
    if(activity.name && activity.dificult && activity.season && activity.duration){
    setBtn(false);
    } else{
    setBtn(true);
    }
    }

    const handleInputChange = (e) => {
    setActivity({
    ...activity,
    [e.target.name]: e.target.value
    })
    }

    return (
    <div className={style.container}>
        <form className={style.form} onChange={e=> {console.log(activity.nameCountries)
            bttnEnabled()}}onSubmit={(e) => {
            e.preventDefault();
            postActivity(activity)
            alert('activity created')
            }}
            > <div className={style.mainDiv}>
                <input disabled={btn} className={style.bttn} type="submit" value="create" />
                {btn? <span className={style.spanError}> You must fill all form to send.</span>:<span>You Can Send
                    Now.</span>}
                <div className={style.firstDiv}>
                    <div className={style.labelName}> <label>Name: </label>
                        <input type="text" name='name' placeholder="Name of the activity..."
                            onChange={handleInputChange} value={activity.name} /></div>
                    <div className={style.labelName}>
                        <label className={style.labelDificult}> Dificult: </label>
                        <select type="number" name="dificult" onChange={handleInputChange} value={activity.dificult}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className={style.labelName}>
                        <label>Duration: </label>
                        <input type="text" name="duration" placeholder="Duration..." onChange={handleInputChange}
                            value={activity.duration} />
                    </div>
                    <div className={style.labelName}>
                        <label>Season: </label>
                        <select name="season" onChange={handleInputChange} value={activity.season}>
                            <option>---</option>
                            <option>spring</option>
                            <option>summer</option>
                            <option>winter</option>
                            <option>autumn</option>
                        </select>
                    </div>
                </div>

                <div className={style.SecondDiv}>
                    <label> </label>
                    <p> Countries: multiple select with ctrl</p>
                    <select multiple name="countries" onChange={onChangeOptions}>
                        {countriesName.map((e, i) => {
                        return (<option value={e.id} key={i}>{e.country}</option>)
                        })}
                    </select>
                    <p>Selected Countries: {activity.nameCountries.map((e, i) => { return <p key={i}>{e}</p>})}</p>
                </div>
            </div>


        </form>
        <img className={style.footer} src={footer} alt="footer" />
    </div>
    )
    }