
export const redirect = (targetURL) => {
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}

// export const getIdComponentFromAirtable = (component) => {
//   let id
//   var Airtable = require('airtable');
//   var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');
//   base('Projects').select({
//     filterByFormula: `Component = "${component}"`
//   }).eachPage(function page(records, fetchNextPage) {
//     records.forEach(function(record) {
//       sessionStorage.setItem('idComponent', record.id);
//     });
//     fetchNextPage();
//   }, function done(err) {
//     if (err) { console.error(err); return; }
//   });
//   return sessionStorage.getItem('idComponent')
// }

export const getIdComponentFromAirtable = (component) => {
  if (component == "FontComponent") return "recINBZ8Xs2vcZbrm"
  if (component == "ColorComponent") return "reco7nJB2OUhaPI3A"
  if (component == "InputContentComponent") return "recCu5skhFCwqRgTm"
  if (component == "StyleComponent") return "rec5uJJlLGdQpnmmK"
  if (component == "UploadFileComponent") return "recauoAwNNzk9cI44"
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

export const titleColor = () => {
    return sessionStorage.getItem('color')
}

export const setTitleColor = (color) => {
    sessionStorage.setItem('color', color);
}

export const titleFont = () => {
    return sessionStorage.getItem('font')
}

export const setTitleFont = (font) => {
    sessionStorage.setItem('font', font);
}

export const setTitleStyle = (style) => {
  sessionStorage.setItem('style', style);
}

export const titleStyle = () => {
  return sessionStorage.getItem('style')
}
