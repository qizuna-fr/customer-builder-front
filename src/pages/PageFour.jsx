import { useState } from 'react';

import '../assets/css/Style.css'
import { FontPickerComponent } from '../components/FontPickerComponent';

export const PageFour = () => {
 
    const [font, setFont] = useState("Open Sans");

    return (
        <div>
        <h4> Maitenant choisissez le style d'écriture que vous souhaitez utiliser pour votre application !</h4>
        <FontPickerComponent/>
    </div>
    )
}