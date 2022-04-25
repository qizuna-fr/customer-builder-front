import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';
import { Slider } from '../slides/Slider';
import { useEffect, useState } from 'react';

import '../assets/css/Style.css'
import { setVarialesValues, getVarialesValues } from './utilities';

const Page = () => {
  
  const { name } = useParams()
  const data = Data.find(page => page.url.substring(1) === name)
  const pages = Data.filter(page => page.scroll === 1)
  
  const [dataAirtable, setDataAirtable] = useState([])
  let airtable = []
  let obj = {}

  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');

  const fetchData = async() => {
  base('Projects').select({sort:[{field: "Order", direction: "asc"}], view: "Grid view"}).eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        let component = Data.find(page => page.title === record.get('Component'))
        obj = {
          title : record.get('Title'),
          component : component.component, 
          variableName: record.get('VariableName'),
          order: record.get('Order')
        }
        console.log(obj);
        airtable.push(obj)
      })
      fetchNextPage()
      // let nbComponent  = airtable.length
      // airtable.push({
      //   title : 'Résumé des pages',
      //   component : <LastPage/>, 
      //   variableName: '',
      //   order: nbComponent+1
      // })
      setDataAirtable(airtable)
    }, 
    function done(err) {
      if (err) { console.error(err); return; }
    },
  )
  }
  
  useEffect(() => {
      fetchData();
  }, []);

  const content = () => {

    if ((name === "accueil"))
    {
      return <Accueil/>
    }
    if ((name === "qizuna"))
    {
      return <Slider frames={dataAirtable} ></Slider>
    }
    return data.component
  }

  return (
    <IonPage>
      <IonContent>
        {content()}
      </IonContent>
    </IonPage>
  )
  }

export default Page;