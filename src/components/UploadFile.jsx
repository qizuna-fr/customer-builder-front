import axios from "axios";
import React from "react";
import { setFile } from '../pages/utilities'

import '../assets/css/Style.css'

export const UploadFile = () => {

  const [uploadFile, setUploadFile] = React.useState();
  const [fileName, setFileName] = React.useState();
  const [uploadResponse, setUploadResponse] = React.useState();

    const submitForm = (event) => {
        event.preventDefault();
    
        const dataArray = new FormData();
        dataArray.append("fileName", fileName);
        dataArray.append("uploadFile", uploadFile);
    
        axios
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
        <form onSubmit={submitForm}>
            <input
              type="text"
              onChange={(e) => setFileName(e.target.value)}
              placeholder={"Nom du fichier..."}
              onInput={(e) => fileContent(e.target.value)}
            />
            <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
            <input type="submit" /> 
        </form>
            {uploadResponse}
        </div>
      );
}