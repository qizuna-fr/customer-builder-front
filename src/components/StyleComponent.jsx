import { TitleColor } from "../pages/utilities";

export const StyleComponent = () => {

    let setBold = () => {
        const element = document.getElementById("apply-style");
        const cssObj = window.getComputedStyle(element, null);
        console.log(cssObj);
        let style = cssObj.getPropertyValue("font-weight");
        console.log(cssObj.getPropertyValue("color"));
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
            <input type="button" value="Valider" />
        </div>
    )
}