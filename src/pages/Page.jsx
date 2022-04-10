import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import {Slide} from '../slides/Slide'
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';

const Page = () => {

  const { name } = useParams()
 
  const data = Data.find(page => page.url.substring(1) === name)

  const content = () => {
    console.log(name);
    if ((name == "accueil"))
    {
      return <Accueil/>
    }
    if ((name == "last-page"))
    {
      console.log("last");
      return <LastPage/>
    }
    return (
      <>
      {data.component}
      <Slide slide={data.slide}></Slide>
      </>
    )
  }

  return (
    <IonPage>
      <IonContent>
      <div className="container">
        {content()}
        <hr /><hr /><hr /><hr />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
