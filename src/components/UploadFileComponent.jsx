import React, { useState } from "react";
import { addValuesToDataVariables, dataListAirtable, fetchVariableName, getIdComponentFromAirtable, saveChoicesIntoAirtable } from "../pages/utilities";

export const UploadFileComponent = (props) => {
  
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    let varName = fetchVariableName(dataListAirtable, props.slide)
    addValuesToDataVariables(varName, e.target.files[0].name)
  }

  const setFileTitle = () => {
    if (file === undefined ) 
    {
      alert("Veuillez choisir un fichier !");
    }
    else {
      let idUploadFileComponent = getIdComponentFromAirtable("UploadFileComponent")
      saveChoicesIntoAirtable(idUploadFileComponent, file.name)
    }
  }
  
  return (
    <div>
      <input required type="file" onChange={(e) => handleChange(e)} data-testid="file-input"/>
      {/* <input type="button" value="Valider" onClick={()=>{setFileTitle()}}/> */}
    </div>
  );
}