import { getIdComponentFromAirtable, saveChoicesIntoAirtable, titleStyle, setTitleStyle, setFontStyle, setWeight, setTextTrasnform, initializeVariablesValues, addValuesToDataVariables, variablesValues, fetchVariableName, dataListAirtable } from "../pages/utilities";

export const StyleComponent = (props) => {

    let setBold = () => {
        const element = document.getElementById(props.slide);
        console.log(element);
        const cssObj = window.getComputedStyle(element, null);
        let style = cssObj.getPropertyValue("font-weight");
        if (style == 400) document.getElementById(props.slide).style.fontWeight = "bold";
        else if (style == 700) document.getElementById(props.slide).style.fontWeight = "normal";
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        setWeight(weight)
        let font = cssObj.getPropertyValue("font-style")
        let text = cssObj.getPropertyValue("text-transform") 
        let obj = {
            fontStyle : font,
            weight : weight,
            textTrasnform : text
        }
        // console.log(variablesValues);
        // initializeVariablesValues("TitleStyle")
        // addValuesToDataVariables("TitleStyle",obj)
        // console.log(variablesValues);
        console.log(props);
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
        console.log(variablesValues);
    }
    
    let setItalic = () => {
        const element = document.getElementById(props.slide);
        const cssObj = window.getComputedStyle(element, null);
        let style = cssObj.getPropertyValue("font-style");
        if (style === "normal") document.getElementById(props.slide).style.fontStyle = "italic";
        else document.getElementById(props.slide).style.fontStyle = "normal";
        let font = cssObj.getPropertyValue("font-style")
        setFontStyle(font)
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let text = cssObj.getPropertyValue("text-transform") 
        let obj = {
            fontStyle : font,
            weight : weight,
            textTrasnform : text
        }
        // console.log(variablesValues);
        // initializeVariablesValues("TitleStyle")
        // addValuesToDataVariables("TitleStyle",obj)
        // console.log(variablesValues);
        console.log(props);
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
        console.log(variablesValues);
    }
      
    let setUpperCase = () => {
        document.getElementById(props.slide).style.textTransform = "uppercase";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        let text = cssObj.getPropertyValue("text-transform") 
        setTextTrasnform(text)
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let obj = {
            fontStyle : font,
            weight : weight,
            textTrasnform : text
        }
        // console.log(variablesValues);
        // initializeVariablesValues("TitleStyle")
        // addValuesToDataVariables("TitleStyle",obj)
        // console.log(variablesValues);
        console.log(props);
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
        console.log(variablesValues);
    }
    
    let setLowerCase = () => {
        document.getElementById(props.slide).style.textTransform = "lowercase";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        let text = cssObj.getPropertyValue("text-transform") 
        setTextTrasnform(text)
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let obj = {
            fontStyle : font,
            weight : weight,
            textTrasnform : text
        }
        // console.log(variablesValues);
        // initializeVariablesValues("TitleStyle")
        // addValuesToDataVariables("TitleStyle",obj)
        // console.log(variablesValues);
        console.log(props);
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
        console.log(variablesValues);
    }
      
    let setCapitalize = () => {
        document.getElementById(props.slide).style.textTransform = "capitalize";
        const element = document.getElementById(props.slide)
        const cssObj = window.getComputedStyle(element, null)
        let text = cssObj.getPropertyValue("text-transform") 
        setTextTrasnform(text)
        let font = cssObj.getPropertyValue("font-style")
        let weight = (cssObj.getPropertyValue("font-weight") == 400) ? "normal" : "bold"
        let obj = {
            fontStyle : font,
            weight : weight,
            textTrasnform : text
        }
        // console.log(variablesValues);
        // initializeVariablesValues("TitleStyle")
        // addValuesToDataVariables("TitleStyle",obj)
        // console.log(variablesValues);
        console.log(props);
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
        console.log(variablesValues);
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
        setFontStyle(font)
        setWeight(weight)
        setTextTrasnform(text)
        let obj = {
            fontStyle : font,
            weight : weight,
            textTrasnform : text
        }
        // console.log(variablesValues);
        // initializeVariablesValues("TitleStyle")
        // addValuesToDataVariables("TitleStyle",obj)
        // console.log(variablesValues);
        console.log(props);
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
        console.log(variablesValues);
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
        console.log(variablesValues);
        // initializeVariablesValues("TitleStyle")
        addValuesToDataVariables("TitleStyle",obj)
        console.log(variablesValues);
        // let obj = font+', '+weight+', '+text
        // setTitleStyle(obj)
        // let idStyleComponent = getIdComponentFromAirtable("StyleComponent")
        // saveChoicesIntoAirtable(idStyleComponent, obj)
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