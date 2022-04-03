import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import { Home } from './Home';

const Page = (props) => {

  const { name } = useParams()
 
  const data = Data.find(page => page.url.substring(1) === name)

  const content = () => {
    return data.component
  }

  return (
    <IonPage>
      {/* <Home></Home> */}
      <IonContent>
        {content()}
      </IonContent>
    </IonPage>
  );
};

export default Page;
