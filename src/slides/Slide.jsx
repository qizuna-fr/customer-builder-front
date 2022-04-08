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
        if (next == -1) return redirect(window.location.protocol+'//'+window.location.host+'/'+'last-page')
        // setURLPage('page'+next)
        else redirect(window.location.protocol+'//'+window.location.host+'/'+'page'+next)
    }

    const scrollToPrevious = () => {
        if (previous == 0) redirect(window.location.protocol+'//'+window.location.host+'/'+'accueil')
        // setURLPage('page'+props.slide)
        else redirect(window.location.protocol+'//'+window.location.host+'/'+'page'+previous)
    }

  return (
    <div> 
    <button data-testid="button" id="nextBtn" type="button" onClick={() => scrollToNext()} > Suivant </button>
    <button id="prevBtn" className="buttonleft" type="button" onClick={() => scrollToPrevious()} >Precedent</button>
    </div> 
    )
  }
