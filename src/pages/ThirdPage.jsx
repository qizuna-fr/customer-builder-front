import './Home.css'
import {IonInput, IonLabel } from "@ionic/react"
import {forwardRef, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatedSwitch } from './AnimatedSwitch';

export const ThirdPage = () => {
    const pageTow = useRef(null);
    return (
        <div >
            <div ref={pageTow} className="pageTow" id="2">
            <IonLabel> What email address can we reach you at !</IonLabel>
            <IonInput placeholder="Type your email here..."/>
            <AnimatedSwitch />
            <Link to="/second_page">Previous</Link>  <Link >Finish</Link>
            </div>
        </div>
        )
}