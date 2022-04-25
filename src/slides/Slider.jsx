// import IndicatorDots from './IndicatorDots'
// import Buttons from './Buttons'
// import Carousel from './Carousel';
// import { Scrol } from './Scrol';

// const styles = {
//     btnStyle: {
//       position: 'absolute',
//       width: '100%',
//       zIndex: '100',
//       textAlign: 'center'
//     }
// }

// export const Slider = (props) => {

//   let content = () => {
//     return (
//       props.frames.map((item, index) => (
//         <div className='containerscrol'> 
//           <h1>
//             {item.title}
//           </h1>
//           <p></p>
//           <div style={{height: '100%', background:  "white" }} key={index}>
//             {item.component}
//           </div>
//         </div>
//       ))
//     )
//   }
//   return ( 
//     <>
//       <Carousel widgets={[Scrol]} >
//         {content()}
//       </Carousel>
//       </>
//   )
// }

//import React from 'react';
import { IonSlides, IonSlide, IonContent, IonButton } from '@ionic/react';
import { useRef } from 'react';
import { getValue, onBtnClicked, setValue } from '../pages/utilities';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
  initialSlide: 1, 
  speed: 400
};
 
export const Slider = (props) => {

  const mySlides = useRef(null);
    
  return(
  <IonContent >
    <IonSlides pager={false} options={slideOpts} style={{height: '100%'}} ref={mySlides}>
    {props.frames.map((item, index) => (
      <IonSlide key={index}>
        <div className='containerscrol' key={index}> 
          <h1 key={index}> 
            {item.title}
          </h1> 
          <p></p>
          <div style={{height: '50%', background:  "white" }} key={index}>
            {item.component} 
          </div> 
          <div style={{ position: 'absolute', width: '100%', zIndex: '100', bottom: '0', textAlign: 'center'}}> 
          <input type="button" value="Valider" key={index} onClick={()=>{setValue(mySlides,getValue(item.variableName))}}/>
          </div>
        </div>
      </IonSlide> 
      ))} 
    </IonSlides> 
    <div style={{ position: 'absolute',
    width: '100%',
    zIndex: '100',
    bottom: '0',
    textAlign: 'right'}}> 
      <button class="previous round"  onClick={() => onBtnClicked(mySlides,"prev")}>&#8249;</button>
      <button class="next round"  onClick={() => onBtnClicked(mySlides,"next")}>&#8250;</button>
    </div>
  </IonContent>
)
}