import React, { useState } from "react";
import { setUploadFile } from "../pages/utilities";

export const UploadFile = () => {
  
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setUploadFile(e.target.files[0].name)
  }

  const setFileTitle = () => {
    setUploadFile(file.name)
  }
  
  return (
    <div>
      <input required type="file" onChange={(e) => handleChange(e)} data-testid="file-input"/>
      <input type="button" value="Valider" onClick={setFileTitle}/>
    </div>
  );
}