import { IonButton } from "@ionic/react"
import { redirect, axiosCall } from "../utilities/utilities"


export const Accueil = () => {

    const scrollToNext = () => {
        redirect(`${window.location.protocol}//${window.location.host}/first_page`)
        }

    return(
        <div className="accueil">
            <h>Hello !</h>
            <p></p>
            <IonButton onClick={() => scrollToNext()}>Get Started </IonButton>
        </div>
    )
}