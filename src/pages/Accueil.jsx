import { redirect, setInputContent, setTitleColor, setTitleFont, setUploadFile } from "./utilities"

export const Accueil = () => {

    const logo = require('../assets/icon/qizuna.png');

    const scrollToNext = () => {
        setInputContent("")
        setUploadFile("")
        setTitleFont("")
        setTitleColor("")
        redirect(`${window.location.protocol}//${window.location.host}/scroll`)
    }

    return(
        <div className="containerscrol">
            <h1>Binvenue chez Qizuna !</h1>
            <div className='imgcontainer'><img src={logo} className='logo'/></div>
            <p>Créez votre application mobile, à votre image !</p>
            <button type="submit" onClick={() => scrollToNext()}>Commencer</button>
        </div>
)
}