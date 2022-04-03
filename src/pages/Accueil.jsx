
import { redirect, setURLPage } from "../utilities/utilities"
import './Home.css'

export const Accueil = () => {

    const logo = require('./qizuna.png');

    const scrollToNext = () => {
        setURLPage('first_page')
        redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
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