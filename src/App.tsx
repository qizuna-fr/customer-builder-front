import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Home } from './pages/Home';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import {
  BrowserRouter,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* Theme variables */
import './theme/variables.css';
import Page from './pages/Page';
import { AnimatedSwitch } from './pages/AnimatedSwitch';
import { useState, useEffect } from "react"
import {axiosCall} from './utilities/utilities'

setupIonicReact();




const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <AnimatedSwitch /> */}
      <IonRouterOutlet>
        {/* <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route> */}
        <Route path="/:name" >
              <Page/>
            </Route>
            <BrowserRouter>
      </BrowserRouter>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
