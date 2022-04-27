import { IonItem, IonLabel } from "@ionic/react"
import { Modal } from "@material-ui/core"
import { useState } from "react";
import { variablesValues } from "./utilities"

export const LastPage = (props) => {

  let saveToAirtable = () => {

  }

  let preview = () => {
    // redirect(`${window.location.protocol}//${window.location.host}/preview`)
  }
  // console.log(variablesValues);

  return (
    <div  >
      {
        variablesValues.map((item, index) => (
          <IonItem >
          <IonLabel key={index}>
            {item.name} : {item.value}
          </IonLabel>
    </IonItem>
      ))
    }
      <p></p>
      {/* <input type='button' value='Valider' onClick={saveToAirtable}/> */}
      {/* <input type='button' value='Preview' onClick={()=>{preview()}}/> */}
      
    </div> 
  )
}
