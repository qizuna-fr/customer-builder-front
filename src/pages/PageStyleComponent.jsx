import { StyleComponent } from '../components/StyleComponent';

export const PageStyleComponent = () => {

    return (
        <div className="containerscrol">
        <h4> Choisissez le style d'écriture des titres de votre application !</h4>
        <StyleComponent/>
        <hr></hr>
        Appuiez sur "entrer" pour valider !
    </div>
    )
}