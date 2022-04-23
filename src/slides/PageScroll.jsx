import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Page from '../pages/Page';

const PageScroll = (props) => {

    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/">
              <Redirect to="/accueil" />
            </Route>
            <Route path="/:name" >
                  <Page next={props.next}/>
                </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    )
    }
    export default PageScroll