import {
    BrowserRouter,
    Link,
    Route,
    Switch,
    withRouter
  } from "react-router-dom";
  import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";
import './Home.css'

export const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={10000}>
        <Switch location={location}>
          <Route path="/firstPage" component={FirstPage} />
          <Route path="/secondPage" component={SecondPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));