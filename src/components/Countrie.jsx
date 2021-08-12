import react from 'react'

export default function Countrie(data) {
return (
    <div>
        <img src={data.flag}/>
        <h4>{data.name}</h4>
    </div>
)
}