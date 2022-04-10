import { useState } from 'react';
import FontPicker from "font-picker-react";

import '../assets/css/Style.css'

export const PageFour = () => {
 
    const [font, setFont] = useState("Open Sans");

    return (
        <div>
        <h4> Maitenant choisissez le style d'écriture que vous souhaitez utiliser pour votre application !</h4>
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