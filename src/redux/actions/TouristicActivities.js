import axios from 'axios'

export const POST_ACTIVITY = 'POST_ACTIVITY'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ORDER_CONTINENT = 'ORDER_CONTINENT'
export const ORDER_ASC_COUNTRIES = 'ORDER_ASC_COUNTRIES'
export const ORDER_DES_COUNTRIES = 'ORDER_DES_COUNTRIES'

export const post_activity_action = (data) => {
return{ 
    type: POST_ACTIVITY,
    payload: data
}

}

export const get_countries_action = (name, id) => {
 let route = 'localhost:3000/countries';
 if(name){
     route +=`name=${name}`
 }
 if(id){
     route += `/${id}`
 }
    return async function (dispatch){ 
        let result = await axios.get_countries_action(route);
        dispatch({
            type: GET_COUNTRIES,
            payload : !result.data 
            ? []
            : result.data 
        })
        
    }
}