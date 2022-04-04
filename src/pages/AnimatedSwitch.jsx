import {Route,  Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { SecondPage } from "../components/SecondPage";
import { FirstPage } from "../components/FirstPage";
import { ThirdPage } from "../components/ThirdPage";
import { FourthPage } from "../components/FourthPage";
import { LastPage } from "./LastPage";

import '../assets/css/Style.css'

export const AnimatedSwitch = ({url}) => {
  const content = (url) => {
    if (url == 'first_page') return <Route component={FirstPage} />
    if (url == 'second_page') return <Route component={SecondPage} />
    if (url == 'third_page') return <Route component={ThirdPage} />
    if (url == 'fourth_page') return <Route component={FourthPage} />
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
