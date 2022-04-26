import { IonItem, IonLabel } from "@ionic/react"
import { Modal } from "@material-ui/core"
import { useState } from "react";
import { dataListAirtable, getVariablesValues, inputValue, redirect, titleColor, titleFont, titleStyle, uploadFile, variablesValues } from "./utilities"

export const LastPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

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
  console.log(variablesValues);

  return (
    <div  className="containerscrol">
      <h1> Résumé de vos choix </h1>
      {
        variablesValues.map((item, index) => (
        <IonItem key={index}>
          <IonLabel key={index}>
            coucouc
            {item.name} : {item.value}
          </IonLabel>
      </IonItem>
      ))
      }
      <p></p>
      {/* <input type='button' value='Valider' onClick={saveToAirtable}/> */}
      <input type='button' value='Preview' onClick={()=>{preview()}}/>
      
    </div> 
  )
}
