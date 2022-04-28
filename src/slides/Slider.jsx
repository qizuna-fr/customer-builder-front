import { IonSlides, IonSlide, IonContent, IonToast } from '@ionic/react';
import { useRef, useState, useEffect } from 'react';
import { dataListAirtable, initializeDataListAirtable, setDataListAirtable, setOrderError, setValueError } from '../pages/utilities';
import { InputContentComponent } from '../components/InputContentComponent';
import { UploadFileComponent } from '../components/UploadFileComponent';
import { ColorComponent } from '../components/ColorComponent';
import { FontComponent } from '../components/FontComponent';
import { StyleComponent } from '../components/StyleComponent';
import { useHistory } from 'react-router';

import { alertCircleOutline } from 'ionicons/icons';


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
          order: record.get('Order'),
          Choices : null
        }
        airtable.push(obj)
        setDataListAirtable(obj)
      })
      fetchNextPage()
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
    initializeDataListAirtable()
    setDataListAirtable(dataAirtable)
    console.log(dataListAirtable);

    let orderList = []
    let valueList = []
    dataListAirtable.map((item , index) => {
      orderList.push(item.order)
      valueList.push(item.variableName)
    }) 
    let uniqueOrder = [...new Set(orderList)];
    let uniqueValue = [...new Set(valueList)];
     if (orderList.length != uniqueOrder.length){
       return (
        <>
            <IonToast isOpen={true}
                position="middle"
                color="warning"
                icon={alertCircleOutline}
                message=" Vous avez des doublons dans l'ordre de vos page ! Veuillez verifier votre saisi ! "
            />
        </>
    )
     }
     if (valueList.length != uniqueValue.length) 
     {
       return (
        <>
            <IonToast isOpen={true}
                position="middle"
                color="warning"
                icon={alertCircleOutline}
                message=" Les noms de variables devraient être unique ! Veuillez verifier votre saisi ! "
            />
        </>
    )
     }

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
        redirectToLast()
      }
      swiper.slideNext();
    } else if (direction === "prev") {
      swiper.slidePrev();
    }
  };
  
  const getValue = (variable) => {
    let filtered = dataListAirtable.filter(item => item.variableName === variable)
    if (filtered.length != 0) return filtered[0].value
    else return null
  }
  
  const setValue = async (mySlides,value) => {
    console.log(mySlides);
    const swiper = await mySlides.current.getSwiper();
    console.log(swiper.isEnd);
    if (value === null) 
    {
      alert("Veuillez remplir le champ !");
    }
    else {
      if (swiper.isEnd) {
        redirectToLast()
      }
      swiper.slideNext();
    }
  }

  const history = useHistory()

  const redirectToLast = () => {
    history.push('/last-page')
  }

  return (
    <IonContent>
      <IonSlides pager={true} options={slideOpts} style={{height: '100%'}} ref={mySlides}>
        {content()}
      </IonSlides>
      <div id="btn-center" > 
      <button className="previous"  onClick={() => onBtnClicked(mySlides,"prev")}>&#8249;</button>
      <button className="next"  onClick={() => onBtnClicked(mySlides,"next")}>&#8250;</button>
    </div>
    </IonContent> 
  )
}
