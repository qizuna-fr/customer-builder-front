import { addValuesToDataVariables, dataListAirtable, fetchVariableName, setChoisesValue } from "../pages/utilities"
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const InputContentComponent = (props) => {

  let onInput = props.onInput

  if (onInput) {
    onInput()
  }

  const [commune, setCommune] = useState([])
  
  const getDataFromAPI = (adresse) => {
  
  fetch('https://geo.api.gouv.fr/communes?nom='+adresse+'&fields=departement&limit=5').then((response) => {
    return response.json()
    }).then((res) => {
      let resultCommune = []
      for (var i = 0; i < res.length; i++) {
        resultCommune.push(res[i].nom)
      }
      setCommune(resultCommune)
    })
  }
  
  const setInput = (e) =>{
    let varName = fetchVariableName(dataListAirtable, props.slide)
    setChoisesValue(varName, e.target.firstChild.data)
  } 

  return (
    <div>
      <Autocomplete
        freeSolo
        autoComplete
        autoHighlight
        options={commune}
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
    </div> 
  )
}
