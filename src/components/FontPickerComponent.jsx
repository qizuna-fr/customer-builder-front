import { useState } from 'react';
import React from 'react'
import FontPicker from "font-picker-react";
import { setFontApp } from '../pages/utilities';

export const FontPickerComponent = () => {
 
    const [font, setFont] = useState("Open Sans");
    
    let setColor = (color) => {
        setFont(color);
        setFontApp(color)
    }

    return (
        <div data-testid="font-picker" >
        <FontPicker
            apiKey="AIzaSyDVQrji1LB_5ED_0Yd3WvdkMZXMmNDF6GU"
            activeFontFamily={font}
            onChange={nextFont => { setColor(nextFont.family);}}
        />
        <p className="apply-font">La police sera appliquée à ce texte.</p>
    </div>
    )
}