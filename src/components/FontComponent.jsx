import { useState } from 'react';
import React from 'react'
import FontPicker from "font-picker-react";
import { addValuesToDataVariables, getIdComponentFromAirtable, initializeVariablesValues, saveChoicesIntoAirtable, setTitleFont, variablesValues } from '../pages/utilities';

export const FontComponent = (props) => {
 
    const [font, setFont] = useState("Open Sans");
    
    let setFontName = (value) => {
        setFont(value)
        setTitleFont(font)
        initializeVariablesValues("TitleFont")
        console.log(variablesValues);
        addValuesToDataVariables("TitleFont",font)
        console.log(variablesValues);
    }

    let setFontOnClick = () => {
        let idFontComponent = getIdComponentFromAirtable("FontComponent")
        saveChoicesIntoAirtable(idFontComponent, font)

    }

    return (
        <div data-testid="font-picker" >
        <FontPicker
            apiKey="AIzaSyDVQrji1LB_5ED_0Yd3WvdkMZXMmNDF6GU"
            activeFontFamily={font}
            onChange={nextFont => { setFontName(nextFont.family)}}
        />
        <p className="apply-font">La police sera appliquée à ce texte.</p>

        <p></p>
            {/* <input type="button" value="Valider" onClick={setFontOnClick}/> */}
    </div>
    )
}