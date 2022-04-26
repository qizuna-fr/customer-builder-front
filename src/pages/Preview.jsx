import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { getFontStyle, getIdComponentFromAirtable, getTextColor, getTextOpacity, getTextTrasnform, getWeight, inputValue, redirect, saveChoicesIntoAirtable, titleColor, titleFont, uploadFile, variablesValues } from './utilities';

export const Preview = () => {
    console.log(variablesValues);
    
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
        <input style={{ border: '1px solid #ccc'}} className="previous round" type='button' value='Retour' onClick={()=>{retour()}}/>
        <input style={{ border: '1px solid #ccc'}} className="next round" type='button' value='Valider' onClick={()=>{saveData()}}/>
        </div>
        </div>
);
}