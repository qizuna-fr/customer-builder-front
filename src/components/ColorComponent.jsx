import React, { useEffect, useState } from 'react'
import { addValuesToDataVariables, dataListAirtable, fetchVariableName } from '../pages/utilities';

export const ColorComponent = (props) => {

    let initialize = () => {
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, "#000000, 1")
    }

    useEffect(() => {
        initialize();
    }, []);
   
    const setColorValue = (e) => {
        let color = e.target.value
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, color)
    }

    return (
        <div >
            <p>Choisissez une couleur !</p>
            <hr></hr>
            <input id="input-color" type="color"  list="profilecolorslist" onChange={(e)=>{setColorValue(e)}}/>
            <datalist id="profilecolorslist">
                <option value="#00ffff"/>
                <option value="#ff00ff"/>
                <option value="#ffff00"/>
                <option value="#ffaa00"/>
            </datalist>
            <hr></hr>
            <p>La couleur par défaut sera le noir !</p> 
            <p></p>
            {/* <input type="button" value="Valider" onClick={setColorWithOpacity}/> */}
        </div>
    )
}