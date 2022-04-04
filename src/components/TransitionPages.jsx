import { AnimatedSwitch } from "../pages/AnimatedSwitch"
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
    withRouter,
    useLocation
  } from "react-router-dom";
import { getURLPage, setURLPage } from "../utilities/utilities";

export const TransitionPages = () => {
    let url= getURLPage()
    return (
        <>
            <AnimatedSwitch url = {url} ></AnimatedSwitch>
        </>
    )
}