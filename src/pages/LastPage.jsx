import { IonButton, IonItem, IonLabel } from "@ionic/react"
import {  getColor, getDepartement, getFile, getFontApp } from "../utilities/utilities"
import './Home.css'
import axios from 'axios';

export const LastPage = () => {
  
  let contentAirtable = async () => {
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');
    
    base('Projects').create([
      {
        "fields": {
          "Departement": getDepartement(),
          "logo": getFile(),
          "color": getColor(),
          "front": getFontApp()
        }
      }
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
  //   await axios.put("https://api.airtable.com/v0/app9QhNsv5170O8Iw/Projects?api_key=keyWdc5YHi3Jwi34f", 
  //   {
  //     fields: {
  //       departement: getDepartement(),
  //       logo : getFile(),
  //       color : getColor(),
  //       font : getFontApp(),
  //     }
  // }
  // , {
  // headers: {
  //   'Accept': 'application/json'
  // }
  // })
  }

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
      <IonButton > Preview </IonButton>
      <IonButton onClick={() => contentAirtable()}> Valider </IonButton>
    </div> 
    )
}
