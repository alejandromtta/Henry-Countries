
import Countrie from './Countrie'

export default function Countries ({countries}) {
   if(typeof countries[0] == 'object' && typeof countries[0][0] == 'object'){
       console.log(typeof countries[0])
    return (<div>
        {countries[0].map(c => <Countrie
        name = {c.name}
        flag = {c.flag}
        population = {c.population}/>
        )}
            </div>)
   } else {
       return(<div>No countries or countrie not found</div>)
   }
  
}