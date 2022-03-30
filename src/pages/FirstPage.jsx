import { IonButton, IonInput, IonLabel } from "@ionic/react"
import './Home.css'
import {forwardRef, useRef } from "react";
import { redirect } from "../utilities/utilities";
import { Link } from "react-router-dom";
import { AnimatedSwitch } from "./AnimatedSwitch";


export const FirstPage = () => {

    const pageOne = useRef(null);
    const pageTow = useRef(null);
    const pageThree = useRef(null);
   
    const scrollToNext = () => {
    redirect(`${window.location.protocol}//${window.location.host}/second_page`)
    }

    return (
    <div >
        <div ref={pageOne} className="pageOne" id="1">
        <IonLabel> Let's start with your first name !</IonLabel>
        <IonInput placeholder="Type your first name here..."/>
        {/* <IonButton onClick={() => scrollToNext()}>OK </IonButton> */}
        <AnimatedSwitch />
        <Link to="/second_page">Next</Link>
        </div>
    </div>
    )
}
