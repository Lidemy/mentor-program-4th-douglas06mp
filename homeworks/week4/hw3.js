const request = require('request');

const searchTerm = process.argv[2];
if (!searchTerm) return;

const url = 'https://restcountries.eu/rest/v2/name';

request(`${url}/${searchTerm}`, (err, res, body) => {
  if (!err && res.statusCode >= 200 && res.statusCode < 300) {
    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      console.log(error);
    }

    if (!data.length) {
      console.log('找不到國家資訊');
      return;
    }

    data.forEach((country) => {
      const { name, capital, currencies, callingCodes } = country;
      console.log(`
      ===========
      國家: ${name}
      首都: ${capital}
      貨幣: ${currencies[0].code}
      國碼: ${callingCodes[0]}
      `);
    });
  }
});
