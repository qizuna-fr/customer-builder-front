import React, { useState } from "react";
import { addValuesToDataVariables, dataListAirtable, fetchVariableName, setChoisesValue } from "../utilities/utilities";

export const UploadFileComponent = (props) => {
  
  const [file, setFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0].name);
    let varName = fetchVariableName(dataListAirtable, props.slide)
    // addValuesToDataVariables(varName, e.target.files[0].name)
    setChoisesValue(varName, e.target.files[0].name)
  }
  
  return (
    <div>    
      <input required type="file" onChange={(e) => handleChange(e)} data-testid="file-input"/>
      {/* <input type="button" value="Valider" onClick={()=>{setFileTitle()}}/> */}
    </div>
  );
}