import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { getFontStyle, getTextColor, getTextOpacity, getTextTrasnform, getWeight, inputValue, titleColor, titleFont, uploadFile } from './utilities';

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
        </div>
);
}