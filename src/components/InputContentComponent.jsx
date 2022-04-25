import { addValuesToDataVariables, fetchDataFromAirtable,inputValue, getIdComponentFromAirtable, initializeVariablesValues, saveChoicesIntoAirtable, setInputValue, variablesValues, activeSlide, fetchTitleFromAirtable, fetchCariableNameFromAirtable } from "../pages/utilities"
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {next} from '../slides/Carousel'

export const InputContentComponent = (props) => {

  let onInput = props.onInput

  

  // const [inputValue, setInputValue]= useState()

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
    console.log(variablesValues);
    console.log(props);
    fetchCariableNameFromAirtable(props.slide)
    // console.log(e.target.firstChild.data);
    // const name = document.querySelector("input");
    // setInputValue(e.target.firstChild.data)
    // console.log(inputValue());
    // initializeVariablesValues("InputContent")
    addValuesToDataVariables("InputContent",e.target.firstChild.data)
    console.log(variablesValues);
    
    // console.log(name.value);
    // if (name.value === "" ) 
    // {
    //   alert("Veuillez saisir une valeur !");
    // }
    // else {
    //   setInputValue(name.value)
    //   let idInputContentComponent = getIdComponentFromAirtable("InputContentComponent")
    //   saveChoicesIntoAirtable(idInputContentComponent, name.value)
    // }
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
