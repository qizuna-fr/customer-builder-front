import {Data} from "../components/Data"
import { redirect, setURLPage } from '../pages/utilities';
import { PageTwo } from '../pages/PageTwo';
import { Route } from "workbox-routing";
import { PageOne } from "../pages/PageOne";

export const Slide = (props) => {

  let next = props.slide+1
  let end = Data.find(page => page.slide === next)
  let previous = props.slide-1
  
  const scrollToNext =() => {
    if (end == undefined) return redirect(window.location.protocol+'//'+window.location.host+'/'+'last-page')
    else redirect(window.location.protocol+'//'+window.location.host+'/'+'page'+next)
  }

  const scrollToPrevious = () => {
    if (previous == 0) redirect(window.location.protocol+'//'+window.location.host+'/'+'accueil')
    else redirect(window.location.protocol+'//'+window.location.host+'/'+'page'+previous)
  }

  return (
    <> 
    <button data-testid="button" id="nextBtn" type="button" onClick={() => scrollToNext()} > Suivant </button>
    <button id="prevBtn" className="buttonleft" type="button" onClick={() => scrollToPrevious()} >Precedent</button>
    </> 
    )
  }
