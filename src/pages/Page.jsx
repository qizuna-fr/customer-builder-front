import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import {Slider} from '../slides/Slider'
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';

const Page = () => {

  const { name } = useParams()
 console.log(name);
  const data = Data.find(page => page.url.substring(1) === name)

  const content = () => {
    if ((name == "accueil"))
    {
      return <Accueil/>
    }
    if ((name == "last-page"))
    {
      return <LastPage/>
    }
    return (
      <>
      {data.component}
      <Slider slide={data.slide}></Slider>
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
