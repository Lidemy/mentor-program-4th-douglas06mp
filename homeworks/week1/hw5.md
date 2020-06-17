## 請解釋後端與前端的差異。

**前端** 網頁上使用者可看到的及互動的部分
**後端** 運行網頁背後的伺服器和資料庫

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

瀏覽器透過 DNS 查詢 google IP 位置，接著瀏覽器發出 requset 到 google server，server 接收到 request 後從 database 搜尋相關資料，server 回傳 response 給瀏覽器，瀏覽器最後把畫面顯示出來

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. ping [<font color="#0000ff">hostname</font>/<font color="#0000ff">IP</font>]
   網路檢測工具，檢查自己與輸入位址間網路是否通暢
2. traceroute [<font color="#0000ff">hostname</font>/<font color="#0000ff">IP</font>]
   路徑查詢，顯示自己到輸入位址走的是甚麼路徑
3. ipconf 搜尋
   顯示 IP 設定
