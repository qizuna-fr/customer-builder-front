

import axios from "axios";
import React from "react";
import { setFile } from '../pages/utilities'

// import '../assets/css/Style.css'

export const UploadFile = () => {

  const [uploadFile, setUploadFile] = React.useState();
  const [uploadResponse, setUploadResponse] = React.useState();

    const submitForm = (event) => {
        event.preventDefault();
    
        const dataArray = new FormData();
        dataArray.append("uploadFile", uploadFile);
    
        axios
          .post("/", dataArray, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then((response) => {
            setUploadResponse(`File uploaded successfully
            value - ${uploadFile}`);
          })
          .catch((error) => {
            setUploadResponse(`Fichier téléchargé avec succès`);
          });
          setFile(uploadFile)
    };
    
      return (
        <div >
        <form onSubmit={submitForm} data-testid="form">
            <input required type="file" onChange={(e) => setUploadFile(e.target.files)} data-testid="file-input"/>
            <button>Submit</button>
        </form>
            {uploadResponse}
        </div>
      );
}