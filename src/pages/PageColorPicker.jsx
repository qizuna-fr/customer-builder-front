import {ColorPicker} from '../components/ColorComponent'

export const PageColorPicker = () => {

    return (
        <div className="containerscrol">
            <h4> Maitenant choisissez la couleur des titres de votre application !</h4>
            <hr></hr>
            <ColorPicker></ColorPicker>
            <hr></hr>
            Appuiez sur "entrer" pour valider !
        </div>
        )
}