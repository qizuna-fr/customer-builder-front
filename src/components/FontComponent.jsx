import { useState } from 'react';
import React from 'react'
import FontPicker from "font-picker-react";
import { addValuesToDataVariables, dataListAirtable, fetchVariableName, getIdComponentFromAirtable, initializeVariablesValues, saveChoicesIntoAirtable, setTitleFont, variablesValues } from '../pages/utilities';

export const FontComponent = (props) => {
 
    // const [font, setFont] = useState("Open Sans");


    const [data, setData] = useState([])
    const getDataFromAPI = () => {
        console.log("click");
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyDVQrji1LB_5ED_0Yd3WvdkMZXMmNDF6GU').then((response) => {
          return response.json()
          }).then((res) => {
              let tab = []
            for (var i = 0; i < 50; i++) {
              tab.push(res.items[i].family)
            }
            setData(tab)
          })
    }
    
    let setFontName = (value) => {
        
        // setTitleFont(font)
        // initializeVariablesValues("TitleFont")
        // console.log(variablesValues);
        // addValuesToDataVariables("TitleFont",font)
        // console.log(variablesValues);
    }
    
    let setFontOnClick = () => {
        let idFontComponent = getIdComponentFromAirtable("FontComponent")
        // saveChoicesIntoAirtable(idFontComponent, font)
        
    }
    
    let getSelectedFontFamily = (e) => {
        console.log(e.target.value);
        document.getElementById(props.slide).style.fontFamily = e.target.value;
        let varName = fetchVariableName(dataListAirtable, props.slide)
        addValuesToDataVariables(varName, e.target.value)
        console.log(variablesValues);

    }

    return (
        <>
        {/* <FontPicker
            id={props.slide}
            apiKey="AIzaSyDVQrji1LB_5ED_0Yd3WvdkMZXMmNDF6GU"
            activeFontFamily={font}
            onChange={(nextFont) => {setFontName(nextFont.family)}}
        /> */}
        {/* <p id={props.slide}>La police sera appliquée à ce texte.</p> */}
        <p></p>
            {/* <input type="button" value="Valider" onClick={setFontOnClick}/> */}
                <p id={props.slide}>La police sera appliquée à ce texte.</p>
                <p></p>
                <hr></hr>
            <select onClick={getDataFromAPI} onChange={(e)=>{getSelectedFontFamily(e)}}> 
                <option value="choisir une police" disabled>Choisir une police</option>
                {
                    data.map((item, index) => ( 

                        <option value={item} key={index}>{item}</option>
                    ))
                }
           </select> 
        </>

    )
}