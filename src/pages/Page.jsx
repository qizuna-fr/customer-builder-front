import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import {Slide} from '../slides/Slide'
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';

const Page = (props) => {

  const { name } = useParams()
 
  const data = Data.find(page => page.url.substring(1) === name)

  const content = () => {
    if ((name == "accueil"))
    {
      return <Accueil/>
    }
    if ((name == "lastPage"))
    {
      return <LastPage/>
    }
    console.log(data.url);
    return (
      <>
      {data.component}
      <Slide slide = {data.slide}></Slide>
      </>
    )
  }

  return (
    <IonPage>
      {/* <Header></Header> */}
      
      <IonContent>
        {content()}
      </IonContent>
    </IonPage>
  );
};

export default Page;
