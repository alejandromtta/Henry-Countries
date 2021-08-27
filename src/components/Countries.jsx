import style from './Countries.module.css'
import ReactPaginate from 'react-paginate'
import Countrie from './Countrie'
import {useState} from 'react'
import footer from './img/icons/footer.png'
export default function Countries ({countries}) {
    let [pageNumber, setPageNumber] = useState(0)
let countrieResult = countries

    console.log(countries)

   if(!countrieResult.error && countries){
    countries = countries.filter(Boolean);
    let countriesPerPage = 9;
    let pagesVisited = pageNumber * countriesPerPage
    const displayCountries = countries.slice(pagesVisited, pagesVisited + countriesPerPage).map((c, i) =>{
        if(c !== null){
            return  <div className={style.countriesProps} key={i}>

            <Countrie
                name = {c.name}
                flag = {c.flag}
                continent = {c.continent}
                id= {c.ID}
                keys={i}
                />
               </div>
        }
        
            
    })
    const pageCount = Math.ceil(countries.length / countriesPerPage)
    const changePage = ({selected}) => { 
        setPageNumber(selected)
    }
    return (<div className={style.container}>
        <div className={style.countries}>
{displayCountries}
</div>
<div className={style.paginate}>
<ReactPaginate 
previousLabel={"previus"}
nextLabel={"next"}
pageCount={pageCount}
onPageChange={changePage}
containerClassName={style.paginationContainer}
previousClassName= {style.previusBttn}
nextLinkClassName={style.nextBttn}
disabledClassName={style.disablePagination}
activeClassName={style.activePagination}/>
    </div>
    <img src={footer} className={style.footer} alt='footer'/>
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
    