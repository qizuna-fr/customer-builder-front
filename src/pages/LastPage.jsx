import { IonItem, IonLabel } from "@ionic/react"
import { getIdComponentFromAirtable, inputValue, saveChoicesIntoAirtable, titleColor, titleFont, titleStyle, uploadFile } from "./utilities"

export const LastPage = () => {

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

  return (
    <div  className="containerscrol">
      <h4> Résumé de vos choix ! </h4>
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
      <input type='button' value='Preview'/>
    </div> 
  )
}
