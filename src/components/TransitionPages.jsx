import { AnimatedSwitch } from "../pages/AnimatedSwitch"
import { getURLPage } from "../pages/utilities";

export const TransitionPages = () => {
    let url= getURLPage()
    return (
        <>
            <AnimatedSwitch url = {url} ></AnimatedSwitch>
        </>
    )
}