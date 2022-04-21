import { FontPickerComponent } from '../components/FontComponent';

export const PageFontPicker = () => {

    return (
        <div className="containerscrol">
        <h4> Maitenant choisissez le style d'écriture que vous souhaitez utiliser pour votre application !</h4>
        <FontPickerComponent/>
        <hr></hr>
        Appuiez sur "entrer" pour valider !
    </div>
    )
}