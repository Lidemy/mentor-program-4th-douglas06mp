```js
function isValid(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) return 'invalid';
  }
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) return 'invalid';
  }
  return 'valid';
}

isValid([3, 5, 8, 13, 22, 35]);
```

## 執行流程

1. 執行第 12 行，執行 isValid function，並將陣列 [3, 5, 8, 13, 22, 35] 傳入

2. 執行第 3 行，進入迴圈，i=0，判斷 i 是否小於 arr.length(6)，是，進入第一輪迴圈
3. 執行第 4 行，判斷 arr[i](3) 是否小於或等於 0，否，不執行 if block

4. 回到第 3 行，執行 i++，i=1，判斷 i 是否小於 arr.length(6)，是，進入第二輪迴圈
5. 執行第 4 行，判斷 arr[i](5) 是否小於或等於 0，否，不執行 if block

6. 回到第 3 行，執行 i++，i=2，判斷 i 是否小於 arr.length(6)，是，進入第三輪迴圈
7. 執行第 4 行，判斷 arr[i](8) 是否小於或等於 0，否，不執行 if block

8. 回到第 3 行，執行 i++，i=3，判斷 i 是否小於 arr.length(6)，是，進入第四輪迴圈
9. 執行第 4 行，判斷 arr[i](13) 是否小於或等於 0，否，不執行 if block

10. 回到第 3 行，執行 i++，i=4，判斷 i 是否小於 arr.length(6)，是，進入第五輪迴圈
11. 執行第 4 行，判斷 arr[i](22) 是否小於或等於 0，否，不執行 if block

12. 回到第 3 行，執行 i++，i=5，判斷 i 是否小於 arr.length(6)，是，進入第六輪迴圈
13. 執行第 4 行，判斷 arr[i](35) 是否小於或等於 0，否，不執行 if block

14. 回到第 3 行，執行 i++，i=6，判斷 i 是否小於 arr.length(6)，否，跳出迴圈

15. 執行第 6 行，進入迴圈，i=2，判斷 i 是否小於 arr.length(6)，是，進入第一輪迴圈
16. 執行第 7 行，判斷 arr[i](8) 是否不等於 arr[i-1] + arr[i-2](5 + 3)，否，不執行 if block

17. 回到第 6 行，執行 i++，i=3，判斷 i 是否小於 arr.length(6)，是，進入第二輪迴圈
18. 執行第 7 行，判斷 arr[i](13) 是否不等於 arr[i-1] + arr[i-2](8 + 5)，否，不執行 if block

19. 回到第 6 行，執行 i++，i=4，判斷 i 是否小於 arr.length(6)，是，進入第三輪迴圈
20. 執行第 7 行，判斷 arr[i](22) 是否不等於 arr[i-1] + arr[i-2](13 + 8)，否，不執行 if block

21. 回到第 6 行，執行 i++，i=5，判斷 i 是否小於 arr.length(6)，是，進入第四輪迴圈
22. 執行第 7 行，判斷 arr[i](35) 是否不等於 arr[i-1] + arr[i-2](22 + 13)，否，不執行 if block

23. 回到第 6 行，執行 i++，i=6，判斷 i 是否小於 arr.length(6)，否，跳出迴圈

24. 執行第 9 行，回傳字串 'valid'
