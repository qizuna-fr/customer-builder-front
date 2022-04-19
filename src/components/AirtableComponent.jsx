import { getInputContent, getFontApp, getColorApp, getFileApp } from "../pages/utilities"

export const AirtableComponent = () => {
  
  let exist = 0
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyWdc5YHi3Jwi34f'}).base('app9QhNsv5170O8Iw');

  let contentAirtable = async () => {
    base('Projects').select({
      // Selecting the first 3 records in Grid view:
      filterByFormula: `departement = "${getInputContent()}"`
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
          console.log('Retrieved', record.get('Departement'));
          exist = 1
          console.log(exist);
      });
      fetchNextPage();
    }, function done(err) {
      if (err) { console.error(err); return; }
    });
  
    if (exist === 0)
    {
      base('Projects').create([
        {
          "fields": {
            "Departement": getInputContent(),
            "logo": getFileApp(),
            "color": getColorApp(),
            "front": getFontApp()
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
    else console.log("Existe déjà ! ");
  }
  
  return (
    <div>
      <input type="button" value="Valider" onClick={() => contentAirtable()}/>
    </div>
  )
}
