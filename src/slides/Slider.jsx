import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import { useRef, useState } from 'react';
import { getValue, onBtnClicked, setValue } from '../pages/utilities';

export const Slider = (props) => {

  const mySlides = useRef(null);
  
  const slideOpts = {
    initialSlide: 1, 
    speed: 400 
  }

  let content = () => {
    return (
    props.frames.map((item, index) => ( 
      <IonSlide id="ion-slide" key={index}>
        <div className='containerscrol' >   
          <h1>
            {item.title} 
          </h1>
          <p></p>
            {item.component} 
          <div > 
          <input type="button" value="Valider"  onClick={()=>{setValue(mySlides,getValue(item.variableName))}}/>
          </div> 
        </div>  
      </IonSlide>
    )))
  }
  return (
    <IonContent>
      <IonSlides pager={false} options={slideOpts} style={{height: '100%'}} ref={mySlides}>
        {content()}
      </IonSlides>
      <div style={{ position: 'absolute', width: '100%', zIndex: '100', bottom: '0', textAlign: 'right'}}> 
      <button className="previous round"  onClick={() => onBtnClicked(mySlides,"prev")}>&#8249;</button>
      <button className="next round"  onClick={() => onBtnClicked(mySlides,"next")}>&#8250;</button>
    </div>
    </IonContent>
  )
}
