import axios from "axios";
import React from "react";
import { setFile } from '../pages/utilities'

export const UploadFile = (props) => {

  const [uploadFile, setUploadFile] = React.useState();
  const [fileName, setFileName] = React.useState();
  const [uploadResponse, setUploadResponse] = React.useState();
  
  let onSubmit = props.onSubmit
  let onInput = props.onInput
  let onChange = props.onChange
  let value = props.value

  const submitForm = async(event) => {
    if (onSubmit) {
      onSubmit()
    }

    if (onInput) {
      onInput()
    }

    if (onChange) {
      onChange()
    }

    event.preventDefault();
    
    const dataArray = new FormData();
    dataArray.append("fileName", fileName);
    dataArray.append("uploadFile", uploadFile);
    
    await axios
    .post("/", dataArray, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => {
      setUploadResponse(`File uploaded successfully
        POST - fileName
        value - ${fileName}
            
        FILE - ${uploadFile}`);
    })
    .catch((error) => {
      setUploadResponse(`Fichier ${fileName} : ${uploadFile} téléchargé avec succès`);
    });
  };

  let fileContent = (value) => {
  setFile(value)
  }
    
  return (
  <div >
    <form onSubmit={submitForm} data-testid="form-upload">
      <input
      value=""
      type="text"
      data-testid="text-input"
      onChange={(e) => setFileName(e.target.value)}
      placeholder={"Nom du fichier..."}
      onInput={(e) => fileContent(e.target.value)}
      />
      <input value="" type="file" onChange={(e) => setUploadFile(e.target.files)} data-testid="file-input"/>
      <input type="submit" data-testid="submit-input" /> 
    </form>
    {uploadResponse}
  </div>
  )
}