import { IonContent, IonPage } from '@ionic/react';
import {Data} from "../components/Data"
import { useParams } from 'react-router';
import {Slider} from '../slides/Slider'
import { Accueil } from './Accueil';
import { LastPage } from './LastPage';
import IndicatorDots from '../slides/indicator-dots'
import Buttons from '../slides/buttons'
import Carousel from '../slides/Carousel';

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
        <Carousel auto widgets={[IndicatorDots, Buttons]}>
            {pages.map((item, index) => (
                <div  style={{height: '100%'}}>
                    {item.component}
                    <input type="button" value="suivant" style={{float:'right'}} />
                    <input type="button" value="precedent" style={{float:'right'}} />
                </div>
            )
            )}
        </Carousel>
    )
    }
    // return (
    //   <>
    //   {data.component}
    //   {/* <Slider slide={data.slide}></Slider> */}
    //   </>
    // )
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
