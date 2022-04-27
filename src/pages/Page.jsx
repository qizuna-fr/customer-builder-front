import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';
import { Slider } from '../slides/Slider';
import { useEffect, useState } from 'react';

import '../assets/css/Style.css'
import { setdataListAirtable, dataListAirtable } from './utilities';
import { InputContentComponent } from '../components/InputContentComponent';
import { UploadFileComponent } from '../components/UploadFileComponent';
import { ColorComponent } from '../components/ColorComponent';
import { FontComponent } from '../components/FontComponent';
import { StyleComponent } from '../components/StyleComponent';

const Page = () => {
  
  const { name } = useParams()
  const data = Data.find(page => page.url.substring(1) === name)
  const pages = Data.filter(page => page.scroll === 1)
  
  const [dataAirtable, setDataAirtable] = useState([])
  let airtable = []
  let obj = {}

  

  
  const fetchData = async() => {
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');
  base('Projects').select({sort:[{field: "Order", direction: "asc"}], view: "Grid view"}).eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        let component
        if (record.get('Component') === "InputContentComponent") component=<InputContentComponent slide={record.get('Order')}></InputContentComponent>
        if (record.get('Component') === "UploadFileComponent") component=<UploadFileComponent slide={record.get('Order')}></UploadFileComponent>
        if (record.get('Component') === "FontComponent") component=<FontComponent slide={record.get('Order')}></FontComponent>
        if (record.get('Component') === "ColorComponent") component=<ColorComponent slide={record.get('Order')}></ColorComponent>
        if (record.get('Component') === "StyleComponent") component=<StyleComponent slide={record.get('Order')}></StyleComponent>
        obj = {
          idComponent: record.id,
          title : record.get('Title'),
          component : component, 
          variableName: record.get('VariableName'),
          order: record.get('Order')
        }
        airtable.push(obj)
        setdataListAirtable(obj)
      })
      fetchNextPage()
      let nbComponent  = dataListAirtable.length
      dataListAirtable.push({
        title : 'Résumé des pages',
        component : <LastPage/>, 
        variableName: 'Result',
        order: nbComponent+1
      })
      // setDataAirtable(airtable)
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
      return <Slider frames={dataListAirtable} ></Slider>
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