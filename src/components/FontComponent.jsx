import { useEffect, useState } from 'react';
import React from 'react'
import FontPicker from "font-picker-react";
import { dataListAirtable, fetchVariableName, setChoisesValue} from '../utilities/utilities';

export const FontComponent = (props) => {

    const [font, setFont] = useState("Roboto")

    let initialize = () => {
        let varName = fetchVariableName(dataListAirtable, props.slide)
        setChoisesValue(varName, "Roboto")
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

    useEffect(() => {
        getDataFromAPI();
    }, []);

    let getSelectedFontFamily = (e) => {
        let varName = fetchVariableName(dataListAirtable, props.slide)
        setFont(e.target.value)
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
                <p id={props.slide} >La police sera appliquée à ce texte.</p>
                <hr></hr>
            <select onChange={(e)=>{getSelectedFontFamily(e)}}> 
                {
                    data.map((item, index) => ( 
                        <option value={item} key={index}>{item}</option>
                    ))
                }
           </select> 
           <hr></hr>
        </>
    )
}