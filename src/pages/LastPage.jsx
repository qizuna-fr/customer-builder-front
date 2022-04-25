import { IonItem, IonLabel } from "@ionic/react"
import { Modal } from "@material-ui/core"
import { useState } from "react";
import { inputValue, redirect, titleColor, titleFont, titleStyle, uploadFile } from "./utilities"

export const LastPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log(uploadFile());

  let saveToJson = (text, fileName) => {
    // console.log("save");
    // let a = document.createElement('a');
    // a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
    // a.setAttribute('download', fileName);
    // a.click()
  }

  let saveToAirtable = () => {
    // let idInputContentComponent = getIdComponentFromAirtable("InputContentComponent")
    // let idColorComponent = getIdComponentFromAirtable("ColorComponent")
    // let idFontComponent = getIdComponentFromAirtable("FontComponent")
    // let idStyleComponent = getIdComponentFromAirtable("StyleComponent")
    // let idUploadFileComponent = getIdComponentFromAirtable("UploadFileComponent")

    // saveChoicesIntoAirtable(idInputContentComponent, inputValue())
    // saveChoicesIntoAirtable(idColorComponent, titleColor())
    // saveChoicesIntoAirtable(idFontComponent, titleFont())
    // saveChoicesIntoAirtable(idStyleComponent, titleStyle())
    // saveChoicesIntoAirtable(idUploadFileComponent, uploadFile())
  }

  let preview = () => {
    redirect(`${window.location.protocol}//${window.location.host}/preview`)
  }

  return (
    <div  className="containerscrol">
      <h1> Résumé de vos choix </h1>
      <IonItem >
        <IonLabel >Departement : {inputValue()}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel > Logo : {uploadFile()}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel > Couleur des titres : {titleColor()}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel > Police des titres : {titleFont()}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel > Style des titres : {titleStyle()}</IonLabel>
      </IonItem>
      <p></p>
      {/* <input type='button' value='Valider' onClick={saveToAirtable}/> */}
      <input type='button' value='Preview' onClick={()=>{preview()}}/>
      
    </div> 
  )
}
