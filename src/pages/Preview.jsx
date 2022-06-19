import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { getDataListAirtable, redirect, saveChoicesIntoAirtable } from "../utilities/utilities"

export const Preview = () => {
    const logo = require('../assets/icon/qizuna.png');

    let dataList = getDataListAirtable();
    console.log(dataList);
    const fontTitleData = dataList.find(item => item.variableName === "PoliceTitre")
    const fontParagraphData = dataList.find(item => item.variableName === "PoliceParagraphe")
    const colorTitleData = dataList.find(item => item.variableName === "CouleurTitre")
    const colorParagraphData = dataList.find(item => item.variableName === "CouleurParagraphes")
    const logoImageData = dataList.find(item => item.variableName === "LogoCommune")
    const styleTitreData = dataList.find(item => item.variableName === "StyleEcritureTitre")
    const styleParagrapheData = dataList.find(item => item.variableName === "StyleEcritureParagraphes")
    console.log(colorTitleData.Choices);
    let fontTitle = (fontTitleData != undefined) ? fontTitleData.Choices : "open sans";
    let fontParagraph = (fontParagraphData != undefined) ? fontParagraphData.Choices : "open sans";
    let colorTitle = (colorTitleData != undefined) ? colorTitleData.Choices.split(" ")[0] : "#000000";
    let colorParagraph = (colorParagraphData != undefined) ? colorParagraphData.Choices.split(" ")[0] : "#000000";
    let styleFontTitre = (styleTitreData != undefined) ? styleTitreData.Choices.split(" ")[0] : "normal";
    let styleWeightTitre = (styleTitreData != undefined) ? styleTitreData.Choices.split(" ")[1] : "normal";
    let styleTextTransformTitre = (styleTitreData != undefined) ? styleTitreData.Choices.split(" ")[2] : "normal";
    let styleFontParagraphe = (styleParagrapheData != undefined) ? styleTitreData.Choices.split(" ")[0] : "normal";
    let styleWeightParagraphe = (styleParagrapheData != undefined) ? styleTitreData.Choices.split(" ")[1] : "normal";
    let styleTextTransformParagraphe = (styleParagrapheData != undefined) ? styleTitreData.Choices.split(" ")[2] : "normal";
    let logoImage = (logoImageData.Choices != undefined) ? logoImageData : "";

    // console.log(colorTitle.split(" ")[0]);

    let saveToAirtable = () => {
      dataList.map((item, index) => {
        saveChoicesIntoAirtable(item.idComponent, item.Choices)
      })
    }
  
    let previous = () =>{
      redirect(`${window.location.protocol}//${window.location.host}/qizuna`)
    }

  return (
    <div className="containerscrol">
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle > Apperçu de votre application</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{color : colorTitle, fontFamily: fontTitle, textTransform: styleTextTransformTitre, fontWeight : styleWeightTitre, fontStyle : styleFontTitre}}>Titre de l'application</IonCardTitle>
          </IonCardHeader>
          <img src={logo} className='logo' />
          <IonCardContent style={{color : colorParagraph, fontFamily: fontParagraph, textTransform: styleTextTransformParagraphe, fontWeight : styleWeightParagraphe, fontStyle : styleFontParagraphe}}>
            Qizuna, Application mobile premium pour mairies et collectivités ....
            <br></br>
            Notre concept ... Faciliter le quotidien de tous : élus, agents, citoyens... 
            <br></br>
            C'est votre application ... A votre image ...
      </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
    </div>
  );
};
