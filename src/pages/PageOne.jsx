import { redirect, setURLPage, setDepartement } from "./utilities";

import '../assets/css/Style.css'
import { InputContent } from "../components/InputContent";

export const PageOne = (textInput) => {

    const scrollToNext = () => {
    setURLPage('second_page')
    redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
   
    }

    return (
    <div className="container">
    <InputContent textInput="departement"></InputContent>
    <button id="nextBtn" type="button" onClick={() => scrollToNext()} > Suivant </button>
    <hr /><hr /><hr /><hr />
    </div> 
    )
}
