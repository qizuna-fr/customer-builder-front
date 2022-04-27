import React, { useState } from 'react'
import { addValuesToDataVariables, dataListAirtable, fetchVariableName } from '../pages/utilities';

export const ColorComponent = (props) => {
   
    const setColorValue = (e) => {
        let color = e.target.value
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, color)
    }

    // const setOpacityValue = (e) => {
    //     const inputOpacity = document.getElementById("input-opacity")
    //     const inputColor = document.getElementById("input-color")
    //     let obj = {
    //     color : inputColor.value,
    //     opacity : inputOpacity.value
    //     }
    //     let varName = fetchVariableName(dataListAirtable, props.slide)
    //     addValuesToDataVariables(varName, obj)
    // }

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