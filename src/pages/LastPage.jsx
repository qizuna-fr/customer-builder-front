import { IonButton, IonItem, IonLabel } from "@ionic/react"
import {  getColorApp, getFile, getFontApp, getInputContent } from "./utilities"
import { AirtableComponent } from "../components/AirtableComponent"

import '../assets/css/Style.css'

export const LastPage = () => {
  let data = {
    Departement: getInputContent(), 
    Logo: getFile(),
    Color: getColorApp(),
    Police: getFontApp()
  }

  let saveToJson = (text, fileName) => {
    // console.log("save");
    // let a = document.createElement('a');
    // a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
    // a.setAttribute('download', fileName);
    // a.click()
  }

    return (
    <div  className="containerscrol">
        <h4> Résumé de vos choix ! </h4>
      <IonItem >
        <IonLabel >Departement : {getInputContent()}</IonLabel>
        {/* <IonButton > Modifier </IonButton> */}
      </IonItem>
      <IonItem>
        <IonLabel > Logo : {getFile()}</IonLabel>
        {/* <IonButton > Modifier </IonButton> */}
      </IonItem>
      <IonItem>
        <IonLabel > Couleur : {getColorApp()}</IonLabel>
        {/* <IonButton > Modifier </IonButton> */}
      </IonItem>
      <IonItem>
        <IonLabel > Police : {getFontApp()}</IonLabel>
        {/* <IonButton > Modifier </IonButton> */}
      </IonItem>
      <p></p>
      <AirtableComponent></AirtableComponent> 
      {/* <input type="button" value="Valider" onClick={saveToJson(JSON.stringify(data), "filename.json" )}></input> */}
    </div> 
    )
}
