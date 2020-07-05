const request = require('request');

const id = 'qw613y8tcep4j9au8ixzpx5vh473x3';
const url = 'https://api.twitch.tv/kraken/streams';
const query = process.argv[2];

if (!query) return;

const options = {
  url: `${url}?game=${query}&limit=100`,
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

    const { streams } = data;

    if (!streams.length) {
      console.log('No stream');
      return;
    }

    streams.forEach((stream) => {
      const {
        _id,
        viewers,
        channel: { display_name },
      } = stream;
      console.log(`Channel:${display_name} id:${_id} viewers: ${viewers}`);
    });
  }
});
