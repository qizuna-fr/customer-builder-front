import {ColorPicker} from '../components/ColorPicker'

import '../assets/css/Style.css'
import { Slider } from '../slides/Slider'
import { useState } from 'react';

export const PageThree = () => {

    return (
        <div className="containerscrol">
            <h4> Maitenant choisissez la couleur que vous souhaitez utiliser pour votre application !</h4>
            {/* <ColorPicker/>  */}
            <hr></hr>
            <ColorPicker></ColorPicker>
        </div>
        )
}