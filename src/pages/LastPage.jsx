import { IonButton, IonItem, IonLabel } from "@ionic/react"
import {  getColor, getDepartement, getFile, getFontApp, redirect } from "./utilities"

import '../assets/css/Style.css'
import { AirtableComponent } from "../components/AirtableComponent"

export const LastPage = () => {

    return (
    <div className="container">
        <h4> Résumé de vos choix ! </h4>
      <IonItem >
        <IonLabel >Departement : {getDepartement()}</IonLabel>
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
