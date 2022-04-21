import { FontPickerComponent } from '../components/FontComponent';

export const PageFontPicker = () => {

    return (
        <div className="containerscrol">
        <h4> Choisissez la police des titres de votre application !</h4>
        <FontPickerComponent/>
        <hr></hr>
        Appuiez sur "entrer" pour valider !
    </div>
    )
}