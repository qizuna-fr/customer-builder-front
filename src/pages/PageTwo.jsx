import { UploadFile } from '../components/UploadFile';
import React from 'react'

import '../assets/css/Style.css'
import { Slider } from '../slides/Slider';

export const PageTwo = () => {

  return (
    <div className="containerscrol">
        <h4>Avez vous un logo pour votre application ? </h4>
        <hr></hr>
        <UploadFile/>
        {/* <input type="button" value="Valider"></input> */}
        {/* <Slider></Slider> */}
    </div>
  );
}