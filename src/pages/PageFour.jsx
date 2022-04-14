import { useState } from 'react';

import '../assets/css/Style.css'
import { FontPickerComponent } from '../components/FontPickerComponent';
import { Slider } from '../slides/Slider';

export const PageFour = () => {
 
    const [font, setFont] = useState("Open Sans");

    return (
        <div className="containerscrol">
        <h4> Maitenant choisissez le style d'écriture que vous souhaitez utiliser pour votre application !</h4>
        <FontPickerComponent/>
        {/* <input type="button" value="Valider"></input> */}
        {/* <Slider></Slider> */}
    </div>
    )
}