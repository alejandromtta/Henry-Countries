import {Link} from 'react-router-dom';
import style from './Countrie.module.css'
export default function Countrie({name,id,flag,continent, keys}) {
    
return (
    <div className= {style.countrie} key={keys}>
        <Link to={`/home/${id}`}>
        <img className={style.img}src={flag} alt='uwu' height="300px" width="300px" />
        </Link>
        <p>{name}</p>
        <p>{continent}</p>
    </div>
)
}