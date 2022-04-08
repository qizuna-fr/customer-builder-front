import { redirect, setURLPage } from "./utilities"

import '../assets/css/Style.css'

export const Accueil = () => {

    const logo = require('../assets/icon/qizuna.png');

    const scrollToNext = () => {
        setURLPage('page1')
        redirect(`${window.location.protocol}//${window.location.host}/page1`)
        }

    return(
        <>
        <div className="containerAccueil">
            <h1>Binvenue chez Qizuna !</h1>
            <div className='imgcontainer'><img src={logo} className='logo'/></div>
            <p>Créez votre application mobile, à votre image !</p>
            <button type="submit" onClick={() => scrollToNext()}>Commencer</button>
        </div>
        </>
)
}