const ID = 'qw613y8tcep4j9au8ixzpx5vh473x3';
const URL = 'https://api.twitch.tv/kraken';

const options = {
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': ID,
  },
};

const list = document.querySelector('.nav-list');
const streamsList = document.querySelector('.stream-list');
const title = document.querySelector('.stream-title');

async function main() {
  const topGames = await fetchTopGames();
  const topGame = topGames[0].game.name;

  setNavLists(topGames);
  setStreams(topGame);

  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-list-item')) {
      const game = e.target.textContent;
      if (title.textContent === game) return;
      setStreams(game);
    }
  });
}

function setNavLists(games) {
  games.forEach(({ game: { name } }) => {
    const li = document.createElement('li');
    li.classList.add('nav-list-item');
    li.textContent = name;
    list.appendChild(li);
  });
}

async function setStreams(game) {
  title.textContent = game;
  streamsList.innerHTML = '';

  const streams = await fetchTopStreams(game);
  streams.forEach(({ preview, channel }) => {
    const { medium } = preview;
    const { logo, status, display_name } = channel;

    const streamItem = document.createElement('div');
    streamItem.classList.add('stream-item');
    streamItem.innerHTML = `
      <div class="stream-display">
        <img src="${medium}" />
      </div>
      <div class="stream-info">
        <div class="stream-avatar">
          <img src="${logo}" />
        </div>
        <div class="stream-detail">
          <h3 class="stream-name">${status}</h3>
          <p class="stream-streamer">${display_name}</p>
        </div>
      </div>
    `;

    streamsList.appendChild(streamItem);
  });
}

async function fetchTopGames() {
  try {
    const { top } = await fetch(
      `${URL}/games/top?limit=5`,
      options
    ).then((res) => res.json());
    return top;
  } catch (error) {}
}

async function fetchTopStreams(game) {
  try {
    const { streams } = await fetch(
      `${URL}/streams/?game=${encodeURIComponent(game)}&limit=20`,
      options
    ).then((res) => res.json());
    return streams;
  } catch (error) {}
}

document.addEventListener('DOMContentLoaded', main);
