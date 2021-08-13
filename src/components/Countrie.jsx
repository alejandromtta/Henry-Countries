
export default function Countrie({name,countrie,flag,population}) {
return (
    <div>
        <img src={flag} alt='uwu' width="300" height="300"/>
        <h4>{name}</h4>
        <h2>{population}</h2>
    </div>
)
}