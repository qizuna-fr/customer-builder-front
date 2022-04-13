import { getInputContent, setInputContent } from "../pages/utilities"
import React from 'react'

// import "../assets/css/Style.css"

export const InputContent = (props) => {

    let textInput = props.textInput
    let onInput = props.onInput
    let value = props.value

    if (onInput) {
        onInput()
      }

    let textContent = (value) => {
        setInputContent(value)
    }

    return (
    <div>
        <h4>Saisissez votre {textInput} !</h4>
        <p><input value={value} data-testid="text-input" type = "text" placeholder="Tapez ici votre texte..." onInput={(e) => textContent(e.target.value)}></input></p>
    </div> 
    )
}
