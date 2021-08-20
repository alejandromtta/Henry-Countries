import  style from "./About.module.css"

export default function About() {
    return(
        <div className={style.container}>
            <h2>About This Site</h2>
            <p>This site was build with the next technologies:</p>
            <ul>
                <li>React</li>
                <li>Redux-React</li>
                <li>Css</li>
                <li>Express</li>
                <li>Postgress</li>
            </ul>
        </div>
    )
}