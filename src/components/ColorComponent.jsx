import React, { useState } from 'react'
import { addValuesToDataVariables, getIdComponentFromAirtable, initializeVariablesValues, saveChoicesIntoAirtable, setTextColor, setTextOpacity, setTitleColor, variablesValues} from '../pages/utilities';

export const ColorComponent = (props) => {
    const [opacity, setOpacity] = useState('1');
    const [color, setColor] = useState("#4ca2af");

  
    let opacityValue=(e)=>{
        setOpacity(e.target.value)
        setTextOpacity(e.target.value)
    }
    let colorValue=(e)=>{
        console.log(e.target.value);
        setColor(e.target.value)
        setTextColor(e.target.value)
    }
    const setColorValue = (e) => {
        const inputColor = document.getElementById("input-color")
        const inputOpacity = document.getElementById("input-opacity")
        setColor(inputColor.value)
        setOpacity(inputOpacity.value)
        setTextColor(inputColor.value)
        setTextOpacity(inputOpacity.value)
        initializeVariablesValues("TitleColor")
        console.log(variablesValues);
        let obj = {
        color : inputColor.value,
        opacity : inputOpacity.value
        }
        addValuesToDataVariables("TitleColor",obj)
        console.log(variablesValues);
        // setTitleColor(color+','+opacity)
        // let idColorComponent = getIdComponentFromAirtable("ColorComponent")
        // saveChoicesIntoAirtable(idColorComponent, color+','+opacity)
    }

    const setOpacityValue = (e) => {
        const inputOpacity = document.getElementById("input-opacity")
        const inputColor = document.getElementById("input-color")
        setOpacity(inputOpacity.value)
        setColor(inputColor.value)
        setTextColor(inputColor.value)
        setTextOpacity(inputOpacity.value)
        console.log(inputColor.value);
        initializeVariablesValues("TitleColor")
        console.log(variablesValues);
        let obj = {
        color : inputColor.value,
        opacity : inputOpacity.value
        }
        addValuesToDataVariables("TitleColor",obj)
        console.log(variablesValues);
        // setTitleColor(color+','+opacity)
        // let idColorComponent = getIdComponentFromAirtable("ColorComponent")
        // saveChoicesIntoAirtable(idColorComponent, color+','+opacity)
    }

    return (
        <div >
            Opacité 
            <input id="input-opacity" value={opacity} type="range" min="0" max="1" step="0.1" list="tickmarks" onChange={(e)=>{setOpacityValue(e)}}/>
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
                <p></p>
            Couleur 
            <input id="input-color" type="color" value={color} list="profilecolorslist" onChange={(e)=>{setColorValue(e)}}/>
            <datalist id="profilecolorslist">
                <option value="#00ffff"/>
                <option value="#ff00ff"/>
                <option value="#ffff00"/>
                <option value="#ffaa00"/>
            </datalist>
            <p></p> 
            <div id="rectangle" style={{background: color, opacity: opacity}}></div>
            <p></p>
            {/* <input type="button" value="Valider" onClick={setColorWithOpacity}/> */}
        </div>
    )
}