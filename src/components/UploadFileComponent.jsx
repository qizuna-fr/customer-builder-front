import React, { useState } from "react";
import { getIdComponentFromAirtable, saveChoicesIntoAirtable, setUploadFile, setValidate } from "../pages/utilities";

export const UploadFileComponent = () => {
  
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setUploadFile(e.target.files[0].name)
  }

  const setFileTitle = () => {
    if (file === undefined ) 
    {
      alert("Veuillez choisir un fichier !");
    }
    else {
      setUploadFile(file.name)
      let idUploadFileComponent = getIdComponentFromAirtable("UploadFileComponent")
      saveChoicesIntoAirtable(idUploadFileComponent, file.name)
    }
  }
  
  return (
    <div>
      <input required type="file" onChange={(e) => handleChange(e)} data-testid="file-input"/>
      <input type="button" value="Valider" onClick={()=>{setFileTitle()}}/>
    </div>
  );
}