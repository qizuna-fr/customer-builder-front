import { addValuesToDataVariables, fetchVariableName, dataListAirtable } from "../pages/utilities";

export const StyleComponent = (props) => {

    let setBold = () => {
        const element = document.getElementById(props.slide);
        const cssObj = window.getComputedStyle(element, null);
        let style = cssObj.getPropertyValue("font-weight");
        if (style == 400) document.getElementById(props.slide).style.fontWeight = "bold";
        else if (style == 700) document.getElementById(props.slide).style.fontWeight = "normal";
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let font = cssObj.getPropertyValue("font-style")
        let text = cssObj.getPropertyValue("text-transform") 
        let obj = font+', '+weight+', '+text
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
    }
    
    let setItalic = () => {
        const element = document.getElementById(props.slide);
        const cssObj = window.getComputedStyle(element, null);
        let style = cssObj.getPropertyValue("font-style");
        if (style === "normal") document.getElementById(props.slide).style.fontStyle = "italic";
        else document.getElementById(props.slide).style.fontStyle = "normal";
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let text = cssObj.getPropertyValue("text-transform") 
        let obj = font+', '+weight+', '+text
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
    }
      
    let setUpperCase = () => {
        document.getElementById(props.slide).style.textTransform = "uppercase";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        let text = cssObj.getPropertyValue("text-transform") 
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let obj = font+', '+weight+', '+text
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
    }
    
    let setLowerCase = () => {
        document.getElementById(props.slide).style.textTransform = "lowercase";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        let text = cssObj.getPropertyValue("text-transform")
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let obj = font+', '+weight+', '+text
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
    }
      
    let setCapitalize = () => {
        document.getElementById(props.slide).style.textTransform = "capitalize";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        let text = cssObj.getPropertyValue("text-transform") 
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let obj = font+', '+weight+', '+text
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
    }

    let setNormal = () => {
        document.getElementById(props.slide).style.textTransform = "none";
        document.getElementById(props.slide).style.fontStyle = "normal";
        document.getElementById(props.slide).style.fontWeight = "normal";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let text = cssObj.getPropertyValue("text-transform") 
        let obj = font+', '+weight+', '+text
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
    }

    let setStyle = () => {
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let text = cssObj.getPropertyValue("text-transform") 
        let obj = {
            fontStyle : font,
            weight : weight,
            textTrasnform : text
        }
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
            {/* <input type="button" value="Valider" onClick={setStyle}/> */}
        </div>
    )
}