import React, { useState } from 'react'
import { setTitleColor, TitleColor } from '../pages/utilities';

export const ColorPicker = () => {
    const [opacity, setOpacity] = useState('1');
    const [color, setColor] = useState("#000000");
  
    let opacityValue=(e)=>{
        setOpacity(e.target.value)
    }
    let colorValue=(e)=>{
      setColor(e.target.value)
    }

    const setColorWithOpacity = () => {
        setTitleColor(color+','+opacity)
        console.log(TitleColor());
    }

    return (
        <div >
            Couleur :
            <input type="range" min="0" max="1" step="0.1" list="tickmarks" onChange={(e)=>{opacityValue(e)}}/>
                <datalist id="tickmarks">
                    <option value="0" label="0"/>
                    <option value="0.1"/>
                    <option value="0.2"/>
                    <option value="0.3"/>
                    <option value="0.4"/>
                    <option value="0.5" label="0.5"/>
                    <option value="0.6"/>
                    <option value="0.7"/>
                    <option value="0.8"/>
                    <option value="0.9"/>
                    <option value="1" label="1"/>
                </datalist>

                <p></p>

                Opacité :
            <input type="color" list="profilecolorslist" onChange={(e)=>{colorValue(e)}}/>
            <datalist id="profilecolorslist">
                <option value="#00ffff"/>
                <option value="#ff00ff"/>
                <option value="#ffff00"/>
                <option value="#ffaa00"/>
            </datalist>

            <p></p> 
            <div id="rectangle" style={{background: color, opacity: opacity}}></div>
            <p></p>
            <input type="button" value="Valider" onClick={setColorWithOpacity}/>
        </div>
    )
}