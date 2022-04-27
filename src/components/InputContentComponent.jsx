import { addValuesToDataVariables, dataListAirtable, fetchVariableName } from "../pages/utilities"
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {next} from '../slides/Carousel'

export const InputContentComponent = (props) => {

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
  
  const setInput = (e) =>{
    let varName = fetchVariableName(dataListAirtable, props.slide)
    addValuesToDataVariables(varName, e.target.firstChild.data)
  } 

  return (
    <div>
      <Autocomplete
        freeSolo
        autoComplete
        autoHighlight
        options={result}
        onChange={(e)=>{setInput(e)}}
        renderInput={(params) => (
          <TextField {...params}
          onInput={(e) => {getDataFromAPI(e.target.value)}}
          variant="outlined"
          label="Tapez votre texte ici"
          className="name"
          required
          />
          )}
      />
      <p></p>
      {/* <input type="button" value="Valider" onClick={() => {setInput()}} /> */}
    </div> 
  )
}
