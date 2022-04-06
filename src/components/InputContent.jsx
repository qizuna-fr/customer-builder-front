import { setInputContent } from "../pages/utilities"
import React from 'react'

// import "../assets/css/Style.css"

export const InputContent = ({textInput}) => {

    let textContent = (value) => {
        setInputContent(value)
    }

    return (
    <div>
        <h4>Commençons par le nom de votre {textInput} !</h4>
        <p><input aria-label="Some Label"  data-testid="text-input" type = "text" placeholder="Tapez ici votre texte..." onInput={(e) => textContent(e.target.value)}></input></p>
    </div> 
    )
}
