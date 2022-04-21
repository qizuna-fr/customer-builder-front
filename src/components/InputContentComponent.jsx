import { setInputContent, InputContent } from "../pages/utilities"
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const InputContentComponent = (props) => {

  let textInput = props.textInput
  let onInput = props.onInput

  if (onInput) {
    onInput()
  }

  const [result, setResult] = useState([])
  
  const getDataFromAPI = (adresse) => {
  
  fetch('https://geo.api.gouv.fr/communes?nom='+adresse+'&fields=departement&limit=5').then((response) => {
    return response.json()
    }).then((res) => {
      for (var i = 0; i < res.length; i++) {
        result.push(res[i].nom)
      }
      setResult(result)
    })
  }

  const setInput = () =>{
    const name = document.querySelector("input");
    setInputContent(name.value)
  } 

  return (
    <div>
      <h4>Saisissez votre {textInput} !</h4>
      <hr></hr>
      <Autocomplete
        freeSolo
        autoComplete
        autoHighlight
        options={result}
        renderInput={(params) => (
          <TextField {...params}
          onChange={(e) => {getDataFromAPI(e.target.value)}}
          variant="outlined"
          label="Tapez votre texte ici"
          className="name"
          />
          )}
      />
      <p></p>
      <input type="button" value="Valider" onClick={setInput}/>
    </div> 
  )
}
