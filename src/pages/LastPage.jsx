import { IonButton, IonItem, IonLabel } from "@ionic/react"
import {  getColor, getFile, getFontApp, getInputContent } from "./utilities"
import { AirtableComponent } from "../components/AirtableComponent"

import '../assets/css/Style.css'

export const LastPage = () => {

    return (
    <div>
        <h4> Résumé de vos choix ! </h4>
      <IonItem >
        <IonLabel >Departement : {getInputContent()}</IonLabel>
        <IonButton > Modifier </IonButton>
      </IonItem>
      <IonItem>
        <IonLabel > Logo : {getFile()}</IonLabel>
        <IonButton > Modifier </IonButton>
      </IonItem>
      <IonItem>
        <IonLabel > Couleur : {getColor()}</IonLabel>
        <IonButton > Modifier </IonButton>
      </IonItem>
      <IonItem>
        <IonLabel > Police : {getFontApp()}</IonLabel>
        <IonButton > Modifier </IonButton>
      </IonItem>
      <p></p>
      <AirtableComponent></AirtableComponent> 
    </div> 
    )
}
