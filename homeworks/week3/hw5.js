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
  for (let i = 1; i < lines.length; i++) {
    let nums = lines[i].split(' ');
    let num1 = nums[0];
    let num2 = nums[1];
    let k = Number(nums[2]);

    console.log(judge(num1, num2, k));
  }
}

function judge(num1, num2, k) {
  if (num1 === num2) return 'DRAW';

  if (k === -1) [num1, num2] = [num2, num1];

  if (num1.length !== num2.length) return num1.length > num2.length ? 'A' : 'B';

  return num1 > num2 ? 'A' : 'B';
}
