import { Data } from '../components/Data';

export const redirect = (targetURL) => {
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}

export const getIdComponentFromAirtable = (component) => {
  let data = Data.find(page => page.title === component)
  return data.id
}

export const fetchVariableNameFromAirtable = (slide) =>{
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');
  let dataToFetch
  base('Projects').select({
    filterByFormula: `Order = "${slide}"`
  }).eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        // dataToFetch =  record.get('VariableName')
        // sessionStorage.setItem('data', record.get('VariableName'));
        console.log(record.get('VariableName'));
      })
      fetchNextPage()
    }, 
    function done(err) {
      if (err) { console.error(err); return; }
    },
  )

}





export const saveChoicesIntoAirtable = (id, values) => {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');
  base('Projects').update([
    {
      "id": id,
      "fields": {
        "Choices": values
      }
    }
  ], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
  });
}

export const onBtnClicked = async (mySlides,direction) => {
  const swiper = await mySlides.current.getSwiper();
  console.log(swiper.isEnd);
  if (direction === "next") {
    if (swiper.isEnd) redirect(`${window.location.protocol}//${window.location.host}/last-page`)
    swiper.slideNext();
  } else if (direction === "prev") {
    swiper.slidePrev();
  }
};

export const getValue = (variable) => {
  console.log(variable);
  if (variable === "InputContent") return inputValue()
  if (variable === "TitleFont") return titleFont()
  if (variable === "TitleColor") return titleColor()
  if (variable === "UploadFile") return uploadFile()
  if (variable === "TitleStyle") return titleStyle()
}

export const setValue = async (mySlides,value) => {
  console.log(value);
  if (value === null) 
  {
    alert("Veuillez remplir le champ !");
  }
  else {
    const swiper = await mySlides.current.getSwiper();
    if (swiper.isEnd) redirect(`${window.location.protocol}//${window.location.host}/last-page`)
    
    swiper.slideNext();
    // let idUploadFileComponent = getIdComponentFromAirtable("UploadFileComponent")
    // saveChoicesIntoAirtable(idUploadFileComponent, value)
  }
}

export const setActiveSlide = async (mySlides) => {
  const swiper = await mySlides.current.getSwiper();
  console.log(swiper.activeIndex);
  activeSlide = swiper.activeIndex
}

export const setCurrentSlide = (slide) => {
  console.log(slide);
  activeSlide = slide
}

export let activeSlide 

export let variablesValues = []

export const initializeVariablesValues = (valueName) =>{
  let filtered = variablesValues.filter(item => item.name != valueName)
  console.log(variablesValues);
  variablesValues=filtered
  console.log(variablesValues);
}

export const addValuesToDataVariables = (value, slide) =>{
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');
  let valueName
  base('Projects').select({
    filterByFormula: `Order = "${slide}"`
  }).eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        // dataToFetch =  record.get('VariableName')
        // sessionStorage.setItem('data', record.get('VariableName'));
        console.log(record.get('VariableName'));
        valueName=record.get('VariableName')
        console.log(value);
        console.log(valueName);
        let obj = {
          name : valueName,
          value : value
        }
        let filtered = variablesValues.filter(item => item.name != valueName)
        variablesValues=filtered
        variablesValues.push(obj)
        console.log(variablesValues);
      })
      fetchNextPage()
    }, 
    function done(err) {
      if (err) { console.error(err); return; }
    },
  )
}

export const getVariablesValues = () => {
  return variablesValues
}

export const initializeDataListAirtable = () =>{

  dataListAirtable=[]
  console.log(dataListAirtable);
}

export let dataListAirtable = []

export const setdataListAirtable = (obj) => {
  dataListAirtable.push(obj)
}

export const getdataListAirtable = () => {
  return dataListAirtable
}

export const setNext = (next) => {
  sessionStorage.setItem('next', next);
}

export const getNext = () => {
  return sessionStorage.getItem('next')
}

export const setVarialesValues = (variablesValues) =>{
  console.log(variablesValues);
  sessionStorage.setItem('variablesValues', variablesValues);
}

export const getVarialesValues = () =>{
  sessionStorage.getItem('variablesValues');
}

export const setFontStyle = (fontStyle) => {
  sessionStorage.setItem('fontStyle', fontStyle);
}

export const getFontStyle = () => {
  return sessionStorage.getItem('fontStyle')
}

export const setWeight = (weight) => {
  sessionStorage.setItem('weight', weight);
}

export const getWeight = () => {
  return sessionStorage.getItem('weight')
}

export const setTextTrasnform = (textTrasnform) => {
  sessionStorage.setItem('textTrasnform', textTrasnform);
}

export const getTextTrasnform = () => {
  return sessionStorage.getItem('textTrasnform')
}

export const inputValue = () => {
    return sessionStorage.getItem('text')
}

export const setInputValue = (text) => {
    sessionStorage.setItem('text', text);
}

export const uploadFile = () => {
    return sessionStorage.getItem('file')
}

export const setUploadFile = (file) => {
    sessionStorage.setItem('file', file);
}

export const getTextColor = () => {
    return sessionStorage.getItem('color')
}

export const setTextColor = (color) => {
    sessionStorage.setItem('color', color);
}

export const getTextOpacity = () => {
  return sessionStorage.getItem('opacity')
}

export const setTextOpacity = (opacity) => {
  sessionStorage.setItem('opacity', opacity);
}

export const titleColor = () => {
  console.log(getTextColor());
  return getTextColor()+', '+getTextOpacity()
}

export const titleFont = () => {
    return sessionStorage.getItem('font')
}


export const setTitleFont = (font) => {
    sessionStorage.setItem('font', font);
}

export const titleStyle = () => {
  return getFontStyle()+', '+getWeight()+', '+getTextTrasnform()
}
