## 什麼是 Ajax？

非同步處理的技術，javascript 是單一執行緒，程式會一行一行執行，稱為同步，但發送 request 這種需要時間的操作，就必須使用非同步處理，先讓其他程式先繼續執行，等到 response 回傳再去處理。

## 用 Ajax 與我們用表單送出資料的差別在哪？

使用 Ajax 並不會重整頁面，有更好的使用者體驗。

## JSONP 是什麼？

利用 script 裡面放資料，透過指定好的 function 把資料給帶回去，可以存取跨來源資料，但是參數只能 GET 帶過去，無法用 POST。

## 要如何存取跨網域的 API？

須符合 CORS 規範，Server 需要在 response 的 header 加上 Access-Control-Allow-Origin，當瀏覽器收到 response 後會檢查 Access-Control-Allow-Origin 的內容，若有包含發出 resquest 的 origin，瀏覽器就會允許。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為我們透過瀏覽器發出 request，瀏覽器基於安全性的考量，有同源政策 Same Origin Policy。當你的網站與要呼叫 API 的網站不同源 (Domain 不同)，儘管發出 request 但瀏覽器會把 response 擋住。
