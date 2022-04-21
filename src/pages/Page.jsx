import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';
import { Pagescroll } from '../slides/Pagescroll';
import { useEffect, useState } from 'react';
import { PageInputContent} from './PageInputContent';
import { PageUploadFile } from './PageUploadFile';
import { PageFontPicker } from './PageFontPicker';
import { PageColorPicker } from './PageColorPicker';

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
        let component 
        if (record.get('Component') === 'FontComponent') component = <PageFontPicker/>
        if (record.get('Component') === 'ColorComponent') component = <PageColorPicker/>
        if (record.get('Component') === 'UploadFileComponent') component = <PageUploadFile/>
        if (record.get('Component') === 'InputContentComponent') component = <PageInputContent/>
        obj = {
          title : record.get('Title'),
          component : component, 
          variableName: record.get('VariableName'),
          order: record.get('Order')
        }
        airtable.push(obj)
      })
      fetchNextPage()
      let nbComponent  = airtable.length
      airtable.push({
        title : 'Résumé des pages',
        component : <LastPage/>, 
        variableName: '',
        order: nbComponent+1
      })
      setDataAirtable(airtable)
    }, 
    function done(err) {
      if (err) { console.error(err); return; }
    },
  )
  }
  console.log(dataAirtable);
  
  useEffect(() => {
      fetchData();
  }, []);

  const content = () => {

    if ((name === "accueil"))
    {
      return <Accueil/>
    }
    if ((name === "scroll"))
    {
      return <Pagescroll frames={dataAirtable}></Pagescroll>
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