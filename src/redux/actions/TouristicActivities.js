import axios from 'axios'

export const POST_ACTIVITY = 'POST_ACTIVITY'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ORDER_CONTINENT = 'ORDER_CONTINENT'
export const ORDER_ASC_COUNTRIES = 'ORDER_ASC_COUNTRIES'
export const ORDER_DES_COUNTRIES = 'ORDER_DES_COUNTRIES'
export const GET_COUNTRIES_ID = 'GET_COUNTRIES_ID'
export const post_activity_action = (data) => {
return{ 
    type: POST_ACTIVITY,
    payload: data
}

}

export function getCountries  (name, id)  {
 let route = 'http://localhost:3000/countries';
 if(name){
     route +=`?name=${name}`
 }
 if(id){
     route += `/${id}`
 }
    return async function (dispatch){ 
        let result = await axios.get(route);
        dispatch({
            type: GET_COUNTRIES,
            payload : !result.data 
            ? []
            : result.data 
        })
        
    }
}