import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { getFontStyle, getIdComponentFromAirtable, getTextColor, getTextOpacity, getTextTrasnform, getWeight, inputValue, redirect, saveChoicesIntoAirtable, titleColor, titleFont, uploadFile } from './utilities';

export const Preview = () => {
    let title = inputValue()
    let logoapp = uploadFile()
    let color = getTextColor()
    let opacity = getTextOpacity()
    let font = titleFont()
    let fontStyle = getFontStyle()
    let weight = getWeight()
    let textTransfrom = getTextTrasnform()
    const logo = require('../assets/icon/'+logoapp);

    let retour = () => {
        redirect(`${window.location.protocol}//${window.location.host}/last-page`)
      }

      let saveData = () => {
        let idColorComponent = getIdComponentFromAirtable("ColorComponent")
        saveChoicesIntoAirtable(idColorComponent, color+','+opacity)
        let idFontComponent = getIdComponentFromAirtable("FontComponent")
        saveChoicesIntoAirtable(idFontComponent, font)
        let idInputContentComponent = getIdComponentFromAirtable("InputContentComponent")
        saveChoicesIntoAirtable(idInputContentComponent, title)
        let obj = font+', '+weight+', '+textTransfrom
        let idStyleComponent = getIdComponentFromAirtable("StyleComponent")
        saveChoicesIntoAirtable(idStyleComponent, obj)
        let idUploadFileComponent = getIdComponentFromAirtable("UploadFileComponent")
        saveChoicesIntoAirtable(idUploadFileComponent, logoapp)

      }
    return(
        <div className="containerpreviw">
        <IonContent>
            <IonCard>
            <IonCardHeader>
                <IonCardTitle style={{
                    color:color, 
                    opacity:opacity, 
                    font:font,
                    fontStyle: fontStyle,
                    fontWeight: weight,
                    textTransform:textTransfrom 
                    }}>
                        {title}
                </IonCardTitle>
            </IonCardHeader>
                <img className='imgcontainer' src={logo} />
            <IonCardContent>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
            </IonCardContent>
            </IonCard>
        </IonContent>
        <div style={{ position: 'absolute',
    width: '100%',
    zIndex: '100',
    bottom: '0',
    border: 'white',
    }}> 
        <input style={{ border: '1px solid #ccc'}} class="previous round" type='button' value='Retour' onClick={()=>{retour()}}/>
        <input style={{ border: '1px solid #ccc'}} class="next round" type='button' value='Valider' onClick={()=>{saveData()}}/>
        </div>
        </div>
);
}