const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function () {
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  const n = Number(lines[0]);

  for (let i = 1; i <= n; i++) {
    isPrime(Number(lines[i])) ? console.log('Prime') : console.log('Composite');
  }
}

function isPrime(n) {
  const sqrt = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }

  return n > 1;
}
