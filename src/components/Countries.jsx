import ReactPaginate from 'react-paginate'
import Countrie from './Countrie'
import {useState} from 'react'
export default function Countries ({countries}) {

    let [pageNumber, setPageNumber] = useState(0)
let countrieResult = countries

    console.log(countries)

   if(!countrieResult.error){
    let countriesPerPage = 9;
    let pagesVisited = pageNumber * countriesPerPage
    const displayCountries = countries.slice(pagesVisited, pagesVisited + countriesPerPage).map((c, i) =>{
        console.log(i)
        return  <div className={i}>

        <Countrie
            name = {c.name}
            flag = {c.flag}
            continent = {c.continent}
            id= {c.ID}
            keys={i}
            />
           </div>
            
    })
    const pageCount = Math.ceil(countries.length / countriesPerPage)
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
    