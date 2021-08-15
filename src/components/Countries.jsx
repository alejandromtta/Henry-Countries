import ReactPaginate from 'react-paginate'
import Countrie from './Countrie'
import {useState} from 'react'
export default function Countries ({countries}) {

    let [pageNumber, setPageNumber] = useState(0)

    

   if(typeof countries[0] == 'object' && typeof countries[0][0] == 'object'){
    let countriesPerPage = 9;
    let pagesVisited = pageNumber * countriesPerPage
    const displayCountries = countries[0].slice(pagesVisited, pagesVisited + countriesPerPage).map(c =>{
         return   <Countrie
            name = {c.name}
            flag = {c.flag}
            continent = {c.continent}
            id= {c.ID}/>
          
            console.log(c)
    })
    const pageCount = Math.ceil(countries[0].length / countriesPerPage)
    const changePage = ({selected}) => { 
        setPageNumber(selected)
    }
    return (<div>
{displayCountries}
<ReactPaginate 
previousLabel={"previus"}
nextLabel={"next"}
pageCount={pageCount}
onPageChange={changePage}
containerClassName={"paginationBttns"}
previousClassName= {"previusBttn"}
nextLinkClassName={"nextBttn"}
disabledClassName={"paginationDisabled"}
activeClassName={"paginationActive"}/>
    </div>)
   } else {
       return(<div>No countries or countrie not found</div>)
   }
  
}

// {countries[0].map(c => <Countrie
//     name = {c.name}
//     flag = {c.flag}
//     population = {c.population}
//     id= {c.ID}/>
//     )}
    