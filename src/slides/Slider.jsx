import {Data} from "../components/Data"
import { redirect } from '../pages/utilities';
import React from 'react'

export const Slider = (props) => {

  let nextSlide = props.slide+1
  let end = Data.find(page => page.slide === nextSlide)
  let previousSlide = props.slide-1
  let url
  
  const scrollToNext =() => {
  if (end == undefined) {
    url = '/'+'last-page'
    return redirect(window.location.protocol+'//'+window.location.host+url)
  }
  else {
    url = '/'+'page'+nextSlide
    redirect(window.location.protocol+'//'+window.location.host+url)
  }
 }

  const scrollToPrevious = () => {
    if (previousSlide == 0) {
      url = '/'+'accueil'
      redirect(window.location.protocol+'//'+window.location.host+url)
    }
    else {
      url = '/'+'page'+previousSlide
      redirect(window.location.protocol+'//'+window.location.host+url)
    }
  }

  return (
    <div> 
      <button data-testid="next-button" id="nextBtn" type="button" onClick={() => scrollToNext()} > Suivant </button>
      <button data-testid="previous-button" id="prevBtn" className="buttonleft" type="button" onClick={() => scrollToPrevious()} >Precedent</button>
    </div> 
    )
}
