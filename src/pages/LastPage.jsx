import { IonItem, IonLabel } from "@ionic/react"
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { dataListAirtable, getDataListAirtable, getVariablesValue, redirect, variablesValues } from "./utilities"

export const LastPage = (props) => {
  console.log(getVariablesValue());

  const location = useLocation()
  
  const [dataList, setDataList] = useState([])
  
  const fetchData = async() => {

    console.log(location);
  
    let d = location.state.data
  
    console.log(d);
    setDataList(d)
  }

  useEffect(() => {
    fetchData();
}, []);

  let saveToAirtable = () => {

  }

  let previous = () =>{
    redirect(`${window.location.protocol}//${window.location.host}/qizuna`)
  }

  let preview = () => {
    // redirect(`${window.location.protocol}//${window.location.host}/preview`)
  }
 
  return (

    <div className='containerscrol' >
      <h1>Résumé de vos choix !</h1>
      <hr></hr>

      <table id="datas" >
        <thead>
          <tr>
            <th>Nom de la variable </th>
            <th>Valeur </th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => (
            <tr  key={index}>
              <td>{item.name} </td>
              <td>{item.value} </td>
            </tr >
          ))
          } 
        </tbody>
      </table >
      <p></p>
      <div id="btn-center" >
      <input type='button' value='Retour' onClick={()=>{previous()}}/>
      <input type='button' value='Valider' onClick={saveToAirtable}/> 
      <input type='button' value='Preview' onClick={()=>{preview()}}/>
      </div>
      <hr></hr>
      <hr></hr>
    </div> 
  )
}
