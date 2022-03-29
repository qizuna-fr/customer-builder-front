import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { WithoutName } from '../components/Essais';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Qizuna builder frontend</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonToolbar>
        </IonToolbar>
        <IonFooter>
          <WithoutName />
          <p>footer pour essais</p>
        </IonFooter>

      </IonContent>
    </IonPage>
  );
};

export default Home;
