import { IonItem, IonLabel } from "@ionic/react"
import { AirtableComponent } from "../components/AirtableComponent"
import { InputContent, TitleColor, TitleFont, UploadFile } from "./utilities"

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
        <IonLabel >Departement : {InputContent()}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel > Logo : {UploadFile()}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel > Couleur : {TitleColor()}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel > Police : {TitleFont()}</IonLabel>
      </IonItem>
      <p></p>
      <input type='button' value='Preview'/>
    </div> 
  )
}
