import {ColorPicker} from '../components/ColorPicker'
import { useState } from 'react';

export const PageThree = () => {

    return (
        <div className="containerscrol">
            <h4> Maitenant choisissez la couleur que vous souhaitez utiliser pour votre application !</h4>
            <hr></hr>
            <ColorPicker></ColorPicker>
            <hr></hr>
            Appuiez sur "entrer" pour valider !
        </div>
        )
}