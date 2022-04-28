import { useEffect, useState } from 'react';
import React from 'react'
import FontPicker from "font-picker-react";
import { dataListAirtable, fetchVariableName, setChoisesValue} from '../pages/utilities';

export const FontComponent = (props) => {

    let initialize = () => {
        let varName = fetchVariableName(dataListAirtable, props.slide)
        setChoisesValue(varName, "Open sans")
    }

    useEffect(() => {
        initialize();
    }, []);
 
    const [data, setData] = useState([])
    const getDataFromAPI = () => {
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
    
    let getSelectedFontFamily = (e) => {
        let varName = fetchVariableName(dataListAirtable, props.slide)
        setChoisesValue(varName, e.target.value)
        document.getElementById(props.slide).style.fontFamily = e.target.value;
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
           <hr></hr>
            <p style={{fontFamily: "Open sans"}}>La police par défaut sera celle appliquée à ce texte ("Open sans") !</p> 
        </>
    )
}