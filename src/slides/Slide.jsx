import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import { redirect, setURLPage } from '../pages/utilities';
import { AnimatedSwitch } from '../pages/AnimatedSwitch';

export const Slide = (props) => {

    console.log(props.slide+1);
    let next = props.slide+1

    let previous = props.slide-1
    const scrollToNext =() => {
        setURLPage('page'+next)
        redirect(window.location.protocol+'//'+window.location.host+'/'+'page'+next)
    }

    const scrollToPrevious = () => {
        setURLPage('page'+props.slide)
        redirect(window.location.protocol+'//'+window.location.host+'/'+'page'+previous)
    }

  return (
    <div> 
    <button data-testid="button" id="nextBtn" type="button" onClick={() => scrollToNext()} > Suivant </button>
    <button id="prevBtn" className="buttonleft" type="button" onClick={() => scrollToPrevious()} >Precedent</button>
    </div> 
    )
  }
