import { useState } from 'react';
import React from 'react'
import FontPicker from "font-picker-react";
import { getIdComponentFromAirtable, saveChoicesIntoAirtable, setTitleFont } from '../pages/utilities';

export const FontComponent = () => {
 
    const [font, setFont] = useState("Open Sans");
    
    let setFontName = (value) => {
        setFont(value)
    }

    let setFontOnClick = () => {
        setTitleFont(font)
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
            <input type="button" value="Valider" onClick={setFontOnClick}/>
    </div>
    )
}