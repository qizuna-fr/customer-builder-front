import axios from "axios";
import React, { useEffect, useState } from "react";
import { setFile } from '../pages/utilities'

export const UploadFile = (props) => {

  const [fileName, setFileName] = useState(null);

  const UPLOAD_ENDPOINT =
    "../assets/css/uploadedfiles";

  const handleSubmit = async e => {
    e.preventDefault();
    let res = await uploadFile(fileName);
    console.log(res.data);
  };

  const uploadFile = async file => {
    const formData = new FormData();
    formData.append("logo", file);

    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
  };

  const handleOnChange = e => {
    console.log(e.target.files[0]);
    setFileName(e.target.files[0]);
    setFile(e.target.files[0].name)
  };

  let onChange = props.onChange
  
  if (onChange) {
    onChange()
  }

  return (
    // <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleOnChange} data-testid="file-input" />
      // <button type="submit">Upload File</button>
    // </form>
  );

}