import { useEffect } from "react";
import { addValuesToDataVariables, fetchVariableName, dataListAirtable, setChoisesValue } from "../utilities/utilities";

export const StyleComponent = (props) => {

    let initialize = () => {
        setNormal()
    }

    useEffect(() => {
        initialize();
    }, []);

    let saveValues = (cssObj) =>{
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let font = cssObj.getPropertyValue("font-style")
        let text = cssObj.getPropertyValue("text-transform") 
        let obj = font+', '+weight+', '+text
        let varName = fetchVariableName(dataListAirtable, props.slide)
        setChoisesValue(varName, obj)
    }

    let setBold = () => {
        const element = document.getElementById(props.slide);
        const cssObj = window.getComputedStyle(element, null);
        let style = cssObj.getPropertyValue("font-weight");
        if (style == 400) document.getElementById(props.slide).style.fontWeight = "bold";
        else if (style == 700) document.getElementById(props.slide).style.fontWeight = "normal";
        saveValues(cssObj)
    }
    
    let setItalic = () => {
        const element = document.getElementById(props.slide);
        const cssObj = window.getComputedStyle(element, null);
        let style = cssObj.getPropertyValue("font-style");
        if (style === "normal") document.getElementById(props.slide).style.fontStyle = "italic";
        else document.getElementById(props.slide).style.fontStyle = "normal";
        saveValues(cssObj)
    }
      
    let setUpperCase = () => {
        document.getElementById(props.slide).style.textTransform = "uppercase";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        saveValues(cssObj)
    }
    
    let setLowerCase = () => {
        document.getElementById(props.slide).style.textTransform = "lowercase";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        saveValues(cssObj)
    }
      
    let setCapitalize = () => {
        document.getElementById(props.slide).style.textTransform = "capitalize";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        saveValues(cssObj)
    }

    let setNormal = () => {
        document.getElementById(props.slide).style.textTransform = "none";
        document.getElementById(props.slide).style.fontStyle = "normal";
        document.getElementById(props.slide).style.fontWeight = "normal";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        saveValues(cssObj)
    }

    return(
        <div >
            <div className="btn-group">
            <button type="button" onClick={() => {setBold()}}>Bold</button>
            <button type="button" onClick={() => {setItalic()}}>Italic</button>
            <button type="button" onClick={() => {setUpperCase()}}>Upper Case</button>
            <button type="button" onClick={() => {setLowerCase()}}>Lower Case</button>
            <button type="button" onClick={() => {setCapitalize()}}>Capitalize</button>
            <button type="button" onClick={() => {setNormal()}}>Normal</button>
            </div>
            <hr></hr>
            <p id={props.slide}> Le style sera appliqué à ce texte </p> 
            <hr></hr>
        </div>
    )
}