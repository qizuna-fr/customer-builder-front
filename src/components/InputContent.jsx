import { setInputContent } from "../pages/utilities"

// import "../assets/css/Style.css"

export const InputContent = ({textInput}) => {

    let textContent = (value) => {
        setInputContent(value)
    }

    return (
    <div>
        <h4>Commençons par le nom de votre {textInput} !</h4>
        <p><input type = "text" placeholder="Tapez ici votre texte..." onInput={(e) => textContent(e.target.value)}></input></p>
    </div> 
    )
}
