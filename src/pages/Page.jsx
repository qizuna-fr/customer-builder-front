import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import { Home } from './Home';

const Page = (props) => {

  const { name } = useParams()
 
  // const [role, setRole] = useState(getRole())
  const data = Data.find(page => page.url.substring(1) === name)

  const content = () => {
    
    return data.component
  }

 

  return (
    <IonPage>
      <Home>coucou</Home>
      
      <IonContent>
        {content()}
      </IonContent>
    </IonPage>
  );
};

export default Page;
