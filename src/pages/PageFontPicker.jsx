import { FontComponent } from '../components/FontComponent';

export const PageFontPicker = () => {

    return (
        <div className="containerscrol">
        <h4> Choisissez la police des titres de votre application !</h4>
        <FontComponent/>
        <hr></hr>
        Appuiez sur "entrer" pour valider !
    </div>
    )
}