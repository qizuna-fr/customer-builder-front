import { useState } from 'react';
import React from 'react'
import FontPicker from "font-picker-react";

// import '../assets/css/Style.css'

export const FontPickerComponent = () => {
 
    const [font, setFont] = useState("Open Sans");

    return (
        <div data-testid="font-picker">
        <FontPicker
            apiKey="AIzaSyDVQrji1LB_5ED_0Yd3WvdkMZXMmNDF6GU"
            activeFontFamily={font}
            onChange={nextFont => {
            setFont(nextFont.family);
            }}
        />
        <p className="apply-font">La police sera appliquée à ce texte.</p>
    </div>
    )
}