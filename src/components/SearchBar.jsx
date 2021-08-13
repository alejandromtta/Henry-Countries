import {useState} from 'react'


export default function SearchBar({onSearch}) {
    let [countrie, setCountrie] = useState("")
    console.log(countrie)
    return(<form onSubmit ={(e)=>{
        e.preventDefault();
        onSearch(countrie)
    }}>
        <input 
        type="text" 
        placeholder="Search...."
        onChange={(event)=> setCountrie(event.target.value)}
        />
        <input type="submit" value="Search"/>
        </form>)
}