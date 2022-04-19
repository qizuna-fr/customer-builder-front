import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';
import { Pagescroll } from '../slides/Pagescroll';

const Page = () => {
  
  const { name } = useParams()
  const data = Data.find(page => page.url.substring(1) === name)
  const pages = Data.filter(page => page.scroll === 1)

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
      return <Pagescroll frames={pages}></Pagescroll>
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

