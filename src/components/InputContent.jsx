import { setInputContent } from "../pages/utilities"
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const InputContent = (props) => {

  let textInput = props.textInput
  let onInput = props.onInput

  if (onInput) {
    onInput()
  }

  let textContent = (value) => {
    setInputContent(value)
  }

  const [result, setResult] = useState([])
  
  const getDataFromAPI = (adresse, codePostal) => {
  
  fetch('https://api-adresse.data.gouv.fr/search/?q='+adresse+'&type=locality').then((response) => {
    return response.json()
    }).then((res) => {
      for (var i = 0; i < res.features.length; i++) {
        result.push(res.features[i].properties['name'])
      }
      setResult(result)
    })
  }

  const setInput = () =>{
    const name = document.querySelector("input");
    console.log(name.value);
    setInputContent(name.value)
  } 

  return (
    <div>
        <h4>Saisissez votre {textInput} !</h4>
        <hr></hr>
        {/* <p><input required  value={value} data-testid="text-input" type = "text" placeholder="Tapez ici votre texte..." onInput={(e) => textContent(e.target.value)}></input></p> */}
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
