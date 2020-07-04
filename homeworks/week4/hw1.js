const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (err, res, body) => {
    if (!err && res.statusCode >= 200 && res.statusCode < 300) {
      let data;

      try {
        data = JSON.parse(body);
      } catch (error) {
        console.log(error);
      }

      data.forEach((book) => {
        const { id, name } = book;
        console.log(`${id} ${name}`);
      });
    }
  }
);
