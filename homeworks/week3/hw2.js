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
  const nums = lines[0].split(' ');
  const num1 = Number(nums[0]);
  const num2 = Number(nums[1]);

  for (let i = num1; i <= num2; i++) {
    if (isNarcissisticNumber(i)) console.log(i);
  }
}

function isNarcissisticNumber(num) {
  const digit = (num + '').length;
  let digitSum = 0;
  let n = num;

  while (n > 0) {
    digitSum += Math.pow(n % 10, digit);
    n = Math.floor(n / 10);
  }

  return digitSum === num;
}
