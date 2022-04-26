import React, { useState } from "react";
import { addValuesToDataVariables, dataListAirtable, fetchVariableName, getIdComponentFromAirtable, getVariablesValues, initializeVariablesValues, saveChoicesIntoAirtable, setUploadFile, setValidate, variablesValues } from "../pages/utilities";

export const UploadFileComponent = (props) => {
  
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    // setUploadFile(e.target.files[0].name)
    console.log(e.target.files[0].name);
    // initializeVariablesValues("UploadFile")
    // console.log(getVariablesValues);
    // addValuesToDataVariables("UploadFile",e.target.files[0].name)
    console.log(props);
    let varName = fetchVariableName(dataListAirtable, props.slide)
    addValuesToDataVariables(varName, e.target.files[0].name)
    console.log(variablesValues);

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
      {/* <input type="button" value="Valider" onClick={()=>{setFileTitle()}}/> */}
    </div>
  );
}