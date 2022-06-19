import { EditImageComponent } from "../components/EditImageComponent"
import { getDataListAirtable, redirect, saveChoicesIntoAirtable, setDataListAirtable } from "../utilities/utilities"
import { Preview } from "./Preview"

export const LastPage = (props) => {

  let dataList = getDataListAirtable()
  setDataListAirtable(dataList)

  let saveToAirtable = () => {
    dataList.map((item, index) => {
      saveChoicesIntoAirtable(item.idComponent, item.Choices)
    })
  }

  let previous = () =>{
    redirect(`${window.location.protocol}//${window.location.host}/qizuna`)
  }

  // let preview = () =>{
  //   redirect(`${window.location.protocol}//${window.location.host}/last-page`)
  // }

  return (

    <div >
      <div>
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
              <td>{item.title} </td>
              <td>{item.Choices} </td>
            </tr >
          ))
          }
        </tbody>
      </table >
      <p></p>
      <div id="btn-center" >
      <input type='button' value='Retour' onClick={()=>previous()}/>
      {/* <input type='button' value='Preview' onClick={() => preview()}/>  */}
      <input type='button' value='Valider' onClick={() => saveToAirtable()}/> 
      </div>
      <hr></hr>
      <hr></hr>
      </div>
    </div> 

  )
}
