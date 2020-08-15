const URL =
  'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';

const lottery = document.querySelector('.lottery');
const content = document.querySelector('.lottery-container');

content.addEventListener('click', function (e) {
  if (e.target.classList.contains('lottery-btn')) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        let { prize } = JSON.parse(xhr.responseText);

        switch (prize) {
          case 'FIRST':
            changeContent('恭喜你中頭獎了！日本東京來回雙人遊！', 1);
            break;
          case 'SECOND':
            changeContent('二獎！90 吋電視一台！', 2);
            break;
          case 'THIRD':
            changeContent(
              '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！',
              3
            );
            break;
          case 'NONE':
            changeContent('銘謝惠顧', 0);
            break;
          default:
            alert('系統不穩定，請再試一次');
            break;
        }
      }
    };

    xhr.onerror = function (e) {
      alert('系統不穩定，請再試一次');
    };

    xhr.send();
  }
});

function changeContent(text, prize) {
  lottery.classList.remove('result', 'none');
  if (prize === 0) {
    lottery.style.backgroundImage = 'none';
    lottery.classList.add('none');
  }
  if (prize !== 0)
    lottery.style.backgroundImage = `url(./img/prize${prize}.jpg)`;

  content.classList.add('result');
  content.innerHTML = `
    <h2 class="lottery-result">${text}</h2>
    <button class="lottery-btn">我要抽獎</button>
  `;
}
