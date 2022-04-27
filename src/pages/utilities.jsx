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
        // record.get('VariableName')

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
  if (direction === "next") {
    // if (swiper.isEnd) redirect(`${window.location.protocol}//${window.location.host}/last-page`)
     swiper.slideNext();
  } else if (direction === "prev") {
    swiper.slidePrev();
  }
};

export const getValue = (variable) => {
  console.log(variable);
  console.log(variablesValues);
  let filtered = variablesValues.filter(item => item.name === variable)
  console.log(filtered[0].value);
  return filtered[0].value
}

export const setValue = async (mySlides,value) => {
  console.log(value);
  if (value === null) 
  {
    alert("Veuillez remplir le champ !");
  }
  else {
    const swiper = await mySlides.current.getSwiper();
    // if (swiper.isEnd) redirect(`${window.location.protocol}//${window.location.host}/last-page`)
    swiper.slideNext();
  }
}

export const setActiveSlide = async (mySlides) => {
  const swiper = await mySlides.current.getSwiper();
  activeSlide = swiper.activeIndex
}

export const setCurrentSlide = (slide) => {
  activeSlide = slide
}

export let activeSlide 

export let variablesValues = []

// export const initializeVariablesValues = (valueName) =>{
//   let filtered = variablesValues.filter(item => item.name != valueName)
//   variablesValues=filtered
// }

export const fetchVariableName = (dataList, slide) =>{
  console.log(dataList);
  let filtered = dataList.filter(item => item.order === slide)
  console.log(filtered);
  return filtered[0].variableName
}

export const addValuesToDataVariables = (valueName, value) =>{
  let obj = {
    name : valueName,
    value : value
  }
  let filtered = variablesValues.filter(item => item.name != valueName)
  variablesValues=filtered
  variablesValues.push(obj)
}

export const initializeDataListAirtable = () =>{
  dataListAirtable=[]
}

export let dataListAirtable = []

export const setdataListAirtable = (obj) => {
  dataListAirtable.push(obj)
}

export const getdataListAirtable = () => {
  return dataListAirtable
}