import {Link} from 'react-router-dom';
import style from './Countrie.module.css'
export default function Countrie({name,id,flag,continent, keys}) {
    
return (
    <div className= {style.country} key={keys}>
        <Link to={`/home/${id}`}>
        <img className={style.img} src={flag} alt='uwu'/>
        </Link>
        <p>{name}</p>
        <p>{continent}</p>
    </div>
)
}