import { UploadFileComponent } from '../components/UploadFileComponent';
import React from 'react'

import '../assets/css/Style.css'

export const PageUploadFile = () => {

  return (
    <div className="containerscrol">
        <h4>Avez vous un logo pour votre application ? </h4>
        <hr></hr>
        <UploadFileComponent/>
        <hr></hr>
        Appuiez sur "entrer" pour valider !
    </div>
  );
}