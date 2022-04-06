import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';

const Page = (props) => {

  const { name } = useParams()
 
  const data = Data.find(page => page.url.substring(1) === name)

  const content = () => {
    return data.component
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
