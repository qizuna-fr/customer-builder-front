import React, { useState } from "react";
import { setFileApp } from '../pages/utilities'

export const UploadFile = () => {
  
  const [uploadFile, setUploadFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files[0].name);
    setUploadFile(e.target.files[0]);
    setFileApp(e.target.files[0].name)
  }
  
  return (
    <div >
      <input required type="file" onChange={(e) => handleChange(e)} data-testid="file-input"/>
    </div>
  );
}