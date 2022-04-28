import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import { useRef, useState, useEffect } from 'react';
import { dataListAirtable, getValue, getVariablesValue, onBtnClicked, setDataListAirtable, setValue, setVariablesValue, variablesValues } from '../pages/utilities';
import { InputContentComponent } from '../components/InputContentComponent';
import { UploadFileComponent } from '../components/UploadFileComponent';
import { ColorComponent } from '../components/ColorComponent';
import { FontComponent } from '../components/FontComponent';
import { StyleComponent } from '../components/StyleComponent';
import { LastPage } from '../pages/LastPage';
import { useHistory } from 'react-router';

export const Slider = (props) => {

  const mySlides = useRef(null); 
  
  const slideOpts = {
    initialSlide: 1, 
    speed: 400 
  }  

  const [dataAirtable, setDataAirtable] = useState([])
  let airtable = []
  let obj = {}

  const fetchData = async() => {
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');
  base('Projects').select({sort:[{field: "Order", direction: "asc"}], view: "Grid view"}).eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        let component
        if (record.get('Component') === "InputContentComponent") component=<InputContentComponent slide={record.get('Order')}></InputContentComponent>
        if (record.get('Component') === "UploadFileComponent") component=<UploadFileComponent slide={record.get('Order')}></UploadFileComponent>
        if (record.get('Component') === "FontComponent") component=<FontComponent slide={record.get('Order')}></FontComponent>
        if (record.get('Component') === "ColorComponent") component=<ColorComponent slide={record.get('Order')}></ColorComponent>
        if (record.get('Component') === "StyleComponent") component=<StyleComponent slide={record.get('Order')}></StyleComponent>
        obj = {
          idComponent: record.id,
          title : record.get('Title'),
          component : component, 
          variableName: record.get('VariableName'),
          order: record.get('Order')
        }
        airtable.push(obj)
        setDataListAirtable(obj)
      })
      fetchNextPage()
      console.log(airtable);
      // let nbComponent  = airtable.length
      // airtable.push({
      //   title : 'Résumé des pages',
      //   component : <LastPage/>, 
      //   variableName: 'Result',
      //   order: nbComponent+1
      // })
      // airtable.push({})
      // airtable.pop();
      setDataAirtable(airtable)
    }, 
    function done(err) {
      if (err) { console.error(err); return; }
    },
    )
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  let content = () => {
    console.log(dataAirtable);
    return (
      dataAirtable.map((item, index) => ( 
      <IonSlide id="ion-slide" key={index}>
        <div className='containerscrol' >   
          <h1>
            {item.title} 
          </h1>
          <p></p>
            {item.component}
          <div >
          <input type="button" value="Valider"  onClick={()=>{setValue(mySlides,getValue(item.variableName))}}/>
          </div> 
        </div>  
      </IonSlide>
    )))
  }

  const onBtnClicked = async (mySlides,direction) => {
    const swiper = await mySlides.current.getSwiper();
    if (direction === "next") {
      if (swiper.isEnd) {
        console.log(variablesValues);
        redirectToLast()
        // redirect(`${window.location.protocol}//${window.location.host}/last-page`, {data : variablesValues})
      }
      swiper.slideNext();
    } else if (direction === "prev") {
      swiper.slidePrev();
    }
  };
  
  const getValue = (variable) => {
    let filtered = variablesValues.filter(item => item.name === variable)
    if (filtered.length != 0) return filtered[0].value
    else return null
  }
  
  const setValue = async (mySlides,value) => {
    console.log(mySlides);
    if (value === null) 
    {
      alert("Veuillez remplir le champ !");
    }
    else {
      const swiper = await mySlides.current;
      if (swiper.isEnd) {
        console.log(variablesValues);
        redirectToLast()
        // redirect(`${window.location.protocol}//${window.location.host}/last-page`, {data : variablesValues})
      }
      swiper.slideNext();
    }
  }

  const history = useHistory()
  const redirectToLast = () => {
    console.log(variablesValues);
    setVariablesValue(variablesValues)
    
    console.log(getVariablesValue());
    history.push({
      pathname: '/last-page',
      state: { data: variablesValues }
    })
  }

  return (
    <IonContent>
      <IonSlides pager={true} options={slideOpts} style={{height: '100%'}} ref={mySlides}>
        {content()}
      </IonSlides>
      <div id="btn-center" > 
      <button className="previous round"  onClick={() => onBtnClicked(mySlides,"prev")}>&#8249;</button>
      <button className="next round"  onClick={() => onBtnClicked(mySlides,"next")}>&#8250;</button>
    </div>
    </IonContent> 
  )
}
