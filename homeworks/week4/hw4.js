const request = require('request');

const id = 'qw613y8tcep4j9au8ixzpx5vh473x3';
const url = 'https://api.twitch.tv/kraken/games/top';

const options = {
  url,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': id,
  },
};

request(options, (err, res, body) => {
  if (!err && res.statusCode >= 200 && res.statusCode < 300) {
    let data;

    try {
      data = JSON.parse(body);
    } catch (error) {
      console.log(error);
    }

    data.top.forEach(({ game: { name }, viewers }) => {
      console.log(`${viewers} ${name}`);
    });
  }
});
