import { UploadFile } from '../components/UploadFile';
import React from 'react'

import '../assets/css/Style.css'

export const PageTwo = () => {

  return (
    <div className="containerscrol">
        <h4>Avez vous un logo pour votre application ? </h4>
        <UploadFile/>
    </div>
  );
}