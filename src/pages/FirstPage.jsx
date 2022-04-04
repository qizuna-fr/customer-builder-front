import './Home.css'
import { redirect, setURLPage, setDepartement } from "../utilities/utilities";

export const FirstPage = () => {

    const scrollToNext = () => {
    setURLPage('second_page')
    redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
   
    }

    let departementContent = (value) => {
        console.log(value);
        setDepartement(value)
    }

    return (
    <div className="container">
        <h4>Commençons par le nom de la commune !</h4>
        <p><input type = "text" placeholder="Tapez ici le nom de la commune..." onInput={(e) => departementContent(e.target.value)}></input></p>
        
        <button id="nextBtn" type="button" onClick={() => scrollToNext()} > Suivant </button>
        <hr /><hr /><hr /><hr />
    </div> 
    )
}
