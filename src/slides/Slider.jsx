import {Data} from "../components/Data"
import { redirect } from '../pages/utilities';
import React from 'react'
import { Link } from "react-router-dom";

export const Slider = (props) => {

  let nextSlide = props.slide+1
  let end = Data.find(page => page.slide === nextSlide)
  let previousSlide = props.slide-1
  let urlnext
  let urlprevious
  console.log(props.slide);
  
  
  const scrollToNext =() => {
  if (end == undefined) {
    urlnext = '/'+'last-page'
    return redirect(window.location.protocol+'//'+window.location.host+urlnext)
  }
  else {
    urlnext = '/'+'page'+nextSlide
    redirect(window.location.protocol+'//'+window.location.host+urlnext)
  }
 }

  const scrollToPrevious = () => {
    if (previousSlide == 0) {
      urlprevious = '/'+'accueil'
      redirect(window.location.protocol+'//'+window.location.host+urlprevious)
    }
    else {
      urlprevious = '/'+'page'+previousSlide
      redirect(window.location.protocol+'//'+window.location.host+urlprevious)
    }
  }
  return (
    <div> 
      <button data-testid="next-button" id="nextBtn" type="button" onClick={() => scrollToNext()}  > Suivant </button>
      <button data-testid="previous-button" id="prevBtn" className="buttonleft" type="button" onClick={() => scrollToPrevious()} >Precedent</button>
    </div> 
    )
}
