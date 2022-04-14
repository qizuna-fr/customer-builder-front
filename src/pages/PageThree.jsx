import {ColorPicker} from '../components/ColorPicker'

import '../assets/css/Style.css'
import { Slider } from '../slides/Slider'

export const PageThree = () => {

    return (
        <div className="containerscrol">
            <h4> Maitenant choisissez la couleur que vous souhaitez utiliser pour votre application !</h4>
            <ColorPicker/> 
            {/* <input type="button" value="Valider"></input> */}
            {/* <Slider></Slider> */}
        </div>
        )
}