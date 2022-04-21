import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';
import { Pagescroll } from '../slides/Pagescroll';
import { useEffect, useState } from 'react';
import { PageOne } from './PageOne';
import { PageTwo } from './PageTwo';
// import { getDataFromDataBase } from './utilities';

const Page = () => {
  
  const { name } = useParams()
  const data = Data.find(page => page.url.substring(1) === name)
  const pages = Data.filter(page => page.scroll === 1)
  
  // const getDataFromDataBase = () => {

    const [dataAirtable, setDataAirtable] = useState([])
    let airtable = []
    let obj = {}

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');

    const fetchData = async() => {
    base('Projects').select({sort:[{field: "Order", direction: "desc"}], view: "Grid view"}).eachPage(
        function page(records, fetchNextPage) {
            records.forEach(function(record) {
              let component 
              if (record.get('Component') === 'FontComponent') component = <PageOne/>
              if (record.get('Component') === 'ColorComponent') component = <PageTwo/>
                obj = {
                    title : record.get('Title'),
                    component : component, 
                    variableName: record.get('VariableName'),
                    order: record.get('Order')
                }
                airtable.push(obj)
            })
            fetchNextPage()
            console.log(dataAirtable);
            setDataAirtable(airtable)
        }, 
        function done(err) {
            if (err) { console.error(err); return; }
        },
    )
    }
    console.log(dataAirtable);
  //   return dataAirtable
  // }
  
  useEffect(() => {
      fetchData();
  }, []);

  const content = () => {

    if ((name === "accueil"))
    {
      return <Accueil/>
    }
    if ((name === "last-page"))
    {
      return <LastPage/>
    }
    if ((name === "scroll"))
    {
      // console.log(getDataFromDataBase())
      // let components = getDataFromDataBase().map(item => item.component)
      // console.log(components);
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