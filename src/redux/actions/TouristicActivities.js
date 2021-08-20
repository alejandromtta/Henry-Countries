import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ORDER_CONTINENT = 'ORDER_CONTINENT'
export const ORDER_ASC_COUNTRIES = 'ORDER_ASC_COUNTRIES'
export const ORDER_DES_COUNTRIES = 'ORDER_DES_COUNTRIES'
export const GET_COUNTRIES_ID = 'GET_COUNTRIES_ID'
export const SET_ORDER = "SET_ORDER";
export const SET_ASC_DES = "SET_ASC_DES";
export const GET_ACTIVITY = "GET_ACTIVITY"


function filterActivity (original,result, boolean) {
  if(boolean) {
   let filter = result.map(e=>{
     if(e.TouristicActivitys[0]){
       return e
     }
   })
   return filter;
  } else {
    return original
  }
}
export function getActivity (boolean) {
let route = 'http://localhost:3000/countries'
return async function (dispatch) {
  let result = await axios.get(route)
  let original = await result.data
  result = result.data
  original = original.result
  dispatch({
    type: GET_ACTIVITY,
    payload: filterActivity(original,result, boolean)
  })
}
}
export function getCountries(name, id) {
  let route = 'http://localhost:3000/countries';
  if (name) {
    route += `?name=${name}`
  }
  if (id) {
    route += `/${id}`
  }
  return async function (dispatch) {
    let result = await axios.get(route);
    dispatch({
      type: GET_COUNTRIES,
      payload: !result.data ?
        [] :
        result.data
    })

  }
}

export function getCountriesID() {
  let route = 'http://localhost:3000/countries?getNames=true'
  return async function (dispatch) {
    let result = await axios.get(route)
    dispatch({
      type: GET_COUNTRIES_ID,
      payload: !result.data ?
        [] :
        result.data
    })
  }
}

export function setContinentOrd (continent){
  let route = `http://localhost:3000/countries?continent=${continent}`
  return async function (dispatch) {
let result = await axios.get(route)
dispatch({
  type: ORDER_CONTINENT,
  payload: !result.data ?
  [] :
  result.data
})
  }
}

function sort(resultOriginal, result, data, type ) {
  if(data.ord === "Population"){
    if(type.asc === 'Asc'){
      result = result.sort((a, b) => a.population - b.population);
      return result
    } if(type.asc === 'Des'){
      result = result.sort((a, b) => a.population - b.population);
      return result.reverse()
    } else { 
      return resultOriginal
    }
  }
if(data.ord === "Name") {
  if(type.asc === 'Asc'){
    result = result.sort((a, b) => a.name.localeCompare(b.name))
    return result
  } if(type.asc === 'Des'){
    result = result.sort((a, b) => a.name.localeCompare(b.name))
    return result.reverse()
  } else { 
    return resultOriginal
  }
 

} 
if(data.ord === "Area") {
 result = result.map(e=> {
    e.area = e.area.replace(/km2|\+/g, '')
    e.area = parseInt(e.area)
    return e
  })
  if(type.asc === 'Asc'){
    result = result.sort((a, b) => a.area - (b.area))
    return result
  } if(type.asc === 'Des'){
    result = result.sort((a, b) => a.area - (b.area))
    return result.reverse()
  } else { 
    return resultOriginal
  }
 }
  else {
  return resultOriginal;
}
  
  
 
}

export function setAscDes(data, type) {
console.log(data, type)
let route = `http://localhost:3000/countries`
  return async function (dispatch) {   
      let result = await axios.get(route);
      result = result.data
     let resultOriginal = await axios.get(route);
     resultOriginal = resultOriginal.data
    dispatch({
      type: SET_ASC_DES,
      payload: sort(resultOriginal,result,data,type)
    
     
    });
  };
}

