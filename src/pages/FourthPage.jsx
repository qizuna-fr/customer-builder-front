import './Home.css'
import { redirect, setFontApp, setURLPage } from "../utilities/utilities";
import { useState } from 'react';
import FontPicker from "font-picker-react";

export const FourthPage = () => {
    
    const scrollToNext = () => {
        setFontApp(font)
        setURLPage('last_page')
        redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
    }
    
    const scrollToPrevious = () => {
        setURLPage('third_page')
        redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
    }

    const [font, setFont] = useState("Open Sans");

    console.log(font);


    return (
        <div className="container">
        <h4> Maitenant choisissez le style d'écriture que vous souhaitez utiliser pour votre application !</h4>
        <FontPicker
            apiKey="AIzaSyDVQrji1LB_5ED_0Yd3WvdkMZXMmNDF6GU"
            activeFontFamily={font}
            onChange={nextFont => {
            setFont(nextFont.family);
            }}
        />
        <p className="apply-font">La police sera appliquée à ce texte.</p>


        <div className="buttonright">
            <button id="nextBtn" type="button" onClick={() => scrollToNext()} >Suivant</button>
        </div>
        <div className="buttonright">
            <button id="prevBtn" className="buttonleft" type="button" onClick={() => scrollToPrevious()} >Precedent</button>
        </div>
        <hr /><hr /><hr /><hr />
    </div>
    )
}