import { getInputContent, getTitleFont, getColorApp, getFileApp } from "../pages/utilities"

export const AirtableComponent = () => {
  
  let exist = 0
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');

  let contentAirtable = async () => {
    base('Projects').select({
      filterByFormula: `departement = "${getInputContent()}"`
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
          console.log('Retrieved', record.get('Departement'));
          exist = 1
      });
      fetchNextPage();
    }, function done(err) {
      if (err) { console.error(err); return; }
    });

    if (getInputContent()==="" || getFileApp()==="" || getColorApp()==="" ) 
    {
      alert("Valeur manquante !");
    }
  
    else {
      if (exist === 0)
      {
        base('Projects').create([
          {
            "fields": {
              "Departement": getInputContent(),
              "logo": getFileApp(),
              "color": getColorApp(),
              "front": getTitleFont()
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
      else {
        console.log("Existe déjà ! ");
        alert("Departement existant !");
      }
    }
    }
  
  return (
    <div>
      <input type="button" value="Valider" onClick={() => contentAirtable()}/>
    </div>
  )
}
