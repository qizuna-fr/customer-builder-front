import { IonItem, IonLabel } from "@ionic/react"
import {  getColorApp, getFileApp, getFontApp, getInputContent } from "./utilities"
import { AirtableComponent } from "../components/AirtableComponent"

export const LastPage = () => {

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
      </IonItem>
      <IonItem>
        <IonLabel > Logo : {getFileApp()}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel > Couleur : {getColorApp()}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel > Police : {getFontApp()}</IonLabel>
      </IonItem>
      <p></p>
      <AirtableComponent></AirtableComponent> 
    </div> 
  )
}
