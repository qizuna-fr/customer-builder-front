import React, { useState } from 'react'
import { addValuesToDataVariables, dataListAirtable, fetchVariableName, getIdComponentFromAirtable, initializeVariablesValues, saveChoicesIntoAirtable, setTextColor, setTextOpacity, setTitleColor, variablesValues} from '../pages/utilities';

export const ColorComponent = (props) => {
    const [opacity, setOpacity] = useState('1');
    const [color, setColor] = useState("#4ca2af");

    // let color = "#4ca2af"
    // let opacity = '1'
  
    let opacityValue=(e)=>{
        // setOpacity(e.target.value)
        // setTextOpacity(e.target.value)
    }
    let colorValue=(e)=>{
        // console.log(e.target.value);
        // setColor(e.target.value)
        // setTextColor(e.target.value)
    }
    const setColorValue = (e) => {
        console.log(e.target.value);
        // setOpacity(inputOpacity.value)
        // setColor(inputColor.value)
        // setTextColor(inputColor.value)
        // setTextOpacity(inputOpacity.value)
        // initializeVariablesValues("TitleColor")
        // console.log(variablesValues);
        let color = e.target.value
        console.log(props);
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, color)
        console.log(variablesValues);
        // addValuesToDataVariables("TitleColor",obj)
        // console.log(variablesValues);
        // setTitleColor(color+','+opacity)
        // let idColorComponent = getIdComponentFromAirtable("ColorComponent")
        // saveChoicesIntoAirtable(idColorComponent, color+','+opacity)
    }

    const setOpacityValue = (e) => {
        const inputOpacity = document.getElementById("input-opacity")
        const inputColor = document.getElementById("input-color")
        // setOpacity(inputOpacity.value)
        // setColor(inputColor.value)
        console.log(inputColor);
        console.log(inputOpacity);
        // setTextColor(inputColor.value)
        // setTextOpacity(inputOpacity.value)
        // console.log(inputColor.value);
        // initializeVariablesValues("TitleColor")
        // console.log(variablesValues);
        let obj = {
        color : inputColor.value,
        opacity : inputOpacity.value
        }
        console.log(obj);
        // addValuesToDataVariables("TitleColor",obj)
        // console.log(variablesValues);
        // setTitleColor(color+','+opacity)
        // let idColorComponent = getIdComponentFromAirtable("ColorComponent")
        // saveChoicesIntoAirtable(idColorComponent, color+','+opacity)
        console.log(props);
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, obj)
        console.log(variablesValues);
    }

    return (
        <div >
            Couleur 
            <input id="input-color" type="color"  list="profilecolorslist" onChange={(e)=>{setColorValue(e)}}/>
            <datalist id="profilecolorslist">
                <option value="#00ffff"/>
                <option value="#ff00ff"/>
                <option value="#ffff00"/>
                <option value="#ffaa00"/>
            </datalist>
            <p></p> 
            {/* Opacité 
            <input id="input-opacity"  type="range" min="0" max="1" step="0.1" list="tickmarks" onChange={(e)=>{setOpacityValue(e)}}/>
                <datalist id="tickmarks">
                    <option value="0" label="0"/>
                    <option value="0.1"/>
                    <option value="0.2"/>
                    <option value="0.3"/>
                    <option value="0.4"/>
                    <option value="0.5" label="0.5"/>
                    <option value="0.6"/>
                    <option value="0.7"/>
                    <option value="0.8"/>
                    <option value="0.9"/>
                    <option value="1" label="1"/>
                </datalist>
                <p></p> */}
                
            {/* <div id="rectangle" 
            style={{background: color, opacity: opacity}}
            ></div> */}
            <p></p>
            {/* <input type="button" value="Valider" onClick={setColorWithOpacity}/> */}
        </div>
    )
}