import axios from 'axios';
let route = 'http://localhost:3000/countries'
export default function postActivity (object){
return axios.post(route,object)
}

