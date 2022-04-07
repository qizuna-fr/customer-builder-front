import {ColorPicker} from '../components/ColorPicker'
import { redirect, setURLPage } from "./utilities"

import '../assets/css/Style.css'

export const PageThree = () => {
    
    const scrollToNext = () => {
        setURLPage('fourth_page')
        redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
    }
    
    const scrollToPrevious = () => {
        setURLPage('second_page')
        redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
    }

    return (
        <div className="container">
            <h4> Maitenant choisissez la couleur que vous souhaitez utiliser pour votre application !</h4>
            <ColorPicker/> 
            <div className="buttonright">
                <button id="nextBtn" type="button" onClick={() => scrollToNext()} >Suivant</button>
            </div>
            <button id="prevBtn" className="buttonleft" type="button" onClick={() => scrollToPrevious()} >Precedent</button>
            <hr /><hr /><hr /><hr />
        </div>
        )
}