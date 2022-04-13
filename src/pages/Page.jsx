import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import {Slider} from '../slides/Slider'
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';
import IndicatorDots from '../slides/indicator-dots'
import Buttons from '../slides/buttons'
// import Carousel from '../slides/Carousel';
import Carousel from 're-carousel'

const Page = () => {

  const { name } = useParams()
 console.log(name);
  const data = Data.find(page => page.url.substring(1) === name)
  const pages = Data.filter(page => page.scroll === 1)

  const content = () => {

    if ((name == "accueil"))
    {
      return <Accueil/>
    }
    if ((name == "last-page"))
    {
      return <LastPage/>
    }
    if ((name == "scroll"))
    {
      return (
      <Carousel auto widgets={[IndicatorDots, Buttons]} >
            {pages.map((item, index) => (
                <div key={index} style={{height: '100%'}}>
                    {item.component}
                    <div >
      {/* <button data-testid="next-button" id="nextBtn" type="button"  > Suivant </button>
      <button data-testid="previous-button" id="prevBtn"  type="button"  >Precedent</button> */}
    </div>
                </div>
            )
            )}
        </Carousel>
        
        )
    }
  }

  return (
    <IonPage>
      <IonContent>
        {content()}
      </IonContent>
    </IonPage>
  );
};

export default Page;

