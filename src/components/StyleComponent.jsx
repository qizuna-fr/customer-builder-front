import { getIdComponentFromAirtable, saveChoicesIntoAirtable, titleStyle, setTitleStyle } from "../pages/utilities";

export const StyleComponent = (props) => {

    let setBold = () => {
        const element = document.getElementById("apply-style");
        const cssObj = window.getComputedStyle(element, null);
        let style = cssObj.getPropertyValue("font-weight");
        if (style == 400) document.getElementById("apply-style").style.fontWeight = "bold";
        else if (style == 700) document.getElementById("apply-style").style.fontWeight = "normal";
    }
    
    let setItalic = () => {
        const element = document.getElementById("apply-style");
        const cssObj = window.getComputedStyle(element, null);
        let style = cssObj.getPropertyValue("font-style");
        if (style === "normal") document.getElementById("apply-style").style.fontStyle = "italic";
        else document.getElementById("apply-style").style.fontStyle = "normal";
    }
      
    let setUpperCase = () => {
        document.getElementById("apply-style").style.textTransform = "uppercase";
    }
    
    let setLowerCase = () => {
        document.getElementById("apply-style").style.textTransform = "lowercase";
    }
      
    let setCapitalize = () => {
        document.getElementById("apply-style").style.textTransform = "capitalize";
    }

    let setNormal = () => {
        document.getElementById("apply-style").style.textTransform = "none";
        document.getElementById("apply-style").style.fontStyle = "normal";
        document.getElementById("apply-style").style.fontWeight = "normal";
    }

    let setStyle = () => {
        const element = document.getElementById("apply-style")
        const cssObj = window.getComputedStyle(element, null)
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let text = cssObj.getPropertyValue("text-transform") 
        let obj = font+', '+weight+', '+text
        setTitleStyle(obj)
        let idStyleComponent = getIdComponentFromAirtable("StyleComponent")
        saveChoicesIntoAirtable(idStyleComponent, obj)
    }

    return(
        <div >
            <button type="button" onClick={() => {setBold()}}>Bold</button>
            <button type="button" onClick={() => {setItalic()}}>Italic</button>
            <button type="button" onClick={() => {setUpperCase()}}>Upper Case</button>
            <button type="button" onClick={() => {setLowerCase()}}>Lower Case</button>
            <button type="button" onClick={() => {setCapitalize()}}>Capitalize</button>
            <button type="button" onClick={() => {setNormal()}}>Normal</button>
            
            <p id="apply-style"> Le style sera appliqué à ce texte </p> 

            <p></p>
            <input type="button" value="Valider" onClick={setStyle}/>
        </div>
    )
}