import { getDataListAirtable, redirect } from "./utilities"

export const LastPage = (props) => {

  let dataList = getDataListAirtable()

  console.log(getDataListAirtable());

  let saveToAirtable = () => {
  }

  let previous = () =>{
    redirect(`${window.location.protocol}//${window.location.host}/qizuna`)
  }

  return (

    <div >
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
      <input type='button' value='Retour' onClick={()=>{previous()}}/>
      <input type='button' value='Valider' onClick={saveToAirtable}/> 
      </div>
      <hr></hr>
      <hr></hr>
    </div> 
  )
}
