import './Home.css'
import {IonInput, IonLabel } from "@ionic/react"
import {forwardRef, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatedSwitch } from './AnimatedSwitch';

export const SecondPage = () => {
    const pageTow = useRef(null);
    return (
        <div >
            <div ref={pageTow} className="pageTow" id="2">
            <IonLabel> And your last name !</IonLabel>
            <IonInput placeholder="Type your last name here..."/>
            <AnimatedSwitch />
            <Link to="/first_page">Previous</Link>    <Link to="/third_page">Next</Link>
            </div>
        </div>
        )
}