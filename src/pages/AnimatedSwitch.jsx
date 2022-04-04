import {
    Route,
    Switch
  } from "react-router-dom";
  import { TransitionGroup, CSSTransition } from "react-transition-group";
import { SecondPage } from "./SecondPage";
import './Home.css'
import { FirstPage } from "./FirstPage";
import { ThirdPage } from "./ThirdPage";
import { FourthPage } from "./FourthPage";
import { LastPage } from "./LastPage";

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

// export const AnimatedSwitch = ({ location }) => {
//   console.log(location);
// return (
//     <TransitionGroup className="transition-group">
//       <CSSTransition
//         key={location.key}
//         timeout={{ enter: 300, exit: 300 }}
//         classNames="fade"
//       >
//         <section className="route-section">
//           <Switch location={location}>
//             <Route path="/first_page" component={FirstPage} />
//             <Route path="/second_page" component={SecondPage} />
//           </Switch>
//         </section>
//       </CSSTransition>
//     </TransitionGroup>
// );
// }
