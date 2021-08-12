import react from 'react'
import { NavLink as Link }  from 'react-router-dom';


export default function LanginPage () {
    return(
        <header>
            <div>
                <Link to="/home">
                <button>welcome</button>
                </Link>
                <button>Dark Mode</button>
            </div>
        </header>
    )
}

