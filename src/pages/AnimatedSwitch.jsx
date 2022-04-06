import {Route,  Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";
import { PageThree } from "./PageThree";
import { PageFour } from "./PageFour";
import { LastPage } from "./LastPage";

import '../assets/css/Style.css'

export const AnimatedSwitch = ({url}) => {
  const content = (url) => {
    if (url == 'first_page') return <Route component={PageOne} />
    if (url == 'second_page') return <Route component={PageTwo} />
    if (url == 'third_page') return <Route component={PageThree} />
    if (url == 'fourth_page') return <Route component={PageFour} />
    if (url == 'last_page') return <Route component={LastPage} />
  }

  return(
  <TransitionGroup>
    <CSSTransition classNames="slide" timeout={10000}>
      <Switch>
        {content(url)}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
  )
  }
