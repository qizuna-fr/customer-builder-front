
export const redirect = (targetURL) => {
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
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
  });
  });
}

export const fetchVariableName = (dataList, slide) =>{
  let filtered = dataList.filter(item => item.order === slide)
  if (filtered.length != 0) return filtered[0].variableName
  else return null
}

export let dataListAirtable = []

export const initializeDataListAirtable = () =>{
  dataListAirtable=[]
}

export const setDataListAirtable = (data) => {
  dataListAirtable=data
}

export const getDataListAirtable = () => {
  return dataListAirtable
}

export const setChoisesValue = (variableName, choices) => {
  let filtered = dataListAirtable.filter(item => item.variableName == variableName)
  let index = dataListAirtable.indexOf(filtered[0]);
  dataListAirtable[index].Choices = choices
}

export const verifyUnique = (list) =>{
  let unique = [...new Set(list)];
  if (list.length != unique.length){
    return true
  }
}