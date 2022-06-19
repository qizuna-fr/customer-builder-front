import { useEffect, useState } from "react"
import { redirect, setClientID } from "../utilities/utilities"

export const ClientListPage = () => {

    const [clientList, setClientList] = useState([])
    let client = {}
    let clientArray = []

    const scrollToNext = () => {
        redirect(`${window.location.protocol}//${window.location.host}/qizuna`)
    }

    const fetchClient = async() => {
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');
        base('Client').select({view: "Grid view"}).eachPage(
        function page(records, fetchNextPage) {
            records.forEach(function(record) {
                client = {
                    idAirtable: record.id,
                    id : record.get('Id'),
                    cityName : record.get('CityName'),
                    mail : record.get('Email'),
                    adresse: record.get('Adress')
                  }
                  clientArray.push(client)
            });
            fetchNextPage();
            setClientList(clientArray)
        }, 
        function done(err) {
          if (err) { console.error(err); return; }
        },
        )
      }

      useEffect(() => {
        fetchClient();
      }, []);

      function getClientList() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            console.log(a);
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    let getClientId = (cityName) =>{
      console.log(cityName);
        // console.log(cityName.target.innerHTML);
        // console.log(clientList);
        // let name = cityName.split("<a>")
        // console.log(name[0]);
        let filtered = clientList.filter(item => item.cityName === cityName)
        // console.log(filtered[0].id);
        setClientID(filtered[0].id);

      }

    return(
        <div className="containerscrol">
            <h1>Choisissez le Client !</h1>
            <hr></hr>
        <select onChange={(e)=>{getClientId(e.target.value)}}> 
                {
                    clientList.map((item, index) => ( 
                        <option value={item.cityName} key={index}>{item.cityName}</option>
                    ))
                }
           </select>
           <hr></hr>
            <button type="submit" onClick={() => scrollToNext()}>Commencer</button>
        </div>
)
}