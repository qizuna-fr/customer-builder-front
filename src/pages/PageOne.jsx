import { redirect, setURLPage } from "./utilities";
import { InputContent } from "../components/InputContent";
import React from 'react'

// import '../assets/css/Style.css'

export const PageOne = (props) => {

    const scrollToNext =() => {
    setURLPage('second_page')
    redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
   
    }

    return (
    <div className="container">
    <InputContent textInput="departement"></InputContent>
    <button data-testid="button" id="nextBtn" type="button" onClick={() => scrollToNext()} > Suivant </button>
    <hr /><hr /><hr /><hr />
    </div> 
    )
}
