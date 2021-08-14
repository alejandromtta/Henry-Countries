import {Link} from 'react-router-dom';
export default function Countrie({name,countrie,flag,population}) {
return (
    <div>
        <Link to={`/home/${name}`}>
        <img src={flag} alt='uwu' width="300" height="300"/>
        </Link>
        <h4>{name}</h4>
        <h2>{population}</h2>
    </div>
)
}