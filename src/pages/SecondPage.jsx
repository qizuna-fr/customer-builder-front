import './Home.css'
import { redirect, setURLPage } from "../utilities/utilities";
import { UploadFile } from '../components/UploadFile';

export const SecondPage = () => {

  const scrollToNext = () => {
    setURLPage('third_page')
    redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
}

    const scrollToPrevious = () => {
        setURLPage('first_page')
        redirect(`${window.location.protocol}//${window.location.host}/animated-switch`)
    }

  return (
    <div className="container">
        <h4>Avez vous un logo pour votre application ? </h4>
        <UploadFile/>
        <div className="buttonright">
            <button id="nextBtn" type="button" onClick={() => scrollToNext()} >Suivant</button>
        </div>
        <button id="prevBtn" className="buttonleft" type="button" onClick={() => scrollToPrevious()} >Precedent</button>
        <hr /><hr /><hr /><hr />
    </div>
  );
}