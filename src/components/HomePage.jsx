
import React, { useEffect } from "react";
import { getCountries } from "../redux/actions/TouristicActivities";
import { useDispatch, useSelector } from "react-redux";
import Countries from './Countries'
import SearchBar from './SearchBar'

import style from './HomePage.module.css'

export default   function HomePage (){
    // let [countries2, setCountries] = useState([])
    
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    
    useEffect( () => {
         dispatch(getCountries());
      }, []);

    

return(
    <div> 
        <SearchBar/>
        <div className={style.countries}>
        <Countries countries={countries}/>
        
        </div>
        
    </div>
)

}




 // function onSearch (countrieSearch) {
    //     console.log(countries)
    //     if(countrieSearch) {
    //         axios.get(`http://localhost:3000/countries?name=${countrieSearch}`).then(response =>  {
    //             const countrie = response.data
    //          setCountries(oldCountrie => [countrie])  
    //          })
    //     } else {
    //        axios.get('http://localhost:3000/countries').then(response =>  {
    //            const countrie = response.data
    //         setCountries(oldCountrie => [countrie])  
    //         }
    //           )}}