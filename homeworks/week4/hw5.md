## 請以自己的話解釋 API 是什麼

應用程式介面 Application Programming Interface，使用者與系統、機械或是軟體，溝通的一個介面或標準。使用者透過正確使用硬體或軟體提供的 API，來取得硬體或軟體提供給使用者的資料

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

**304 Not Modified** 第一次發出 request 時，server 回傳帶有 Expires 跟 Cache-Control 的資訊，這兩個資訊代表這份資源甚麼時候過期，瀏覽器會將這資源快取，下次使用者使用這份資源時，瀏覽器會先檢查是否過期，若沒有則不會發出 Request，直接從瀏覽器拿取資料。

但是若過期了呢?第一次發 request 時 server 還會回傳一個 Etag，Etag 類似一個 hash 值，資源內容不同就會有不同的值，瀏覽器會發出 request 並帶有這個 Etag，server 會利用這個 Etag 比較這分資源內容是否有改動，若沒有改動，回傳 status code 為 304 的 response 代表這份資源能夠繼續使用，若有改動則回傳一份新資源的 reponse

[循序漸進理解 HTTP Cache 機制](https://blog.techbridge.cc/2017/06/17/cache-introduction/)

**401 Unauthorized** 使用者發出的 request 沒有包含或包含錯誤的認証資訊，而被 server 拒絕存取

**413 Request Entity Too Large** reguest 帶有的資料超過 server 處裡的大小

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Url: https://get-restaurants.com/

| 說明     | Method |       Path        |     參數     |
| -------- | :----: | :---------------: | :----------: |
| 所有餐廳 |  GET   |   /restaurants    |      無      |
| 單一餐廳 |  GET   | /restaurants/<ID> |      無      |
| 刪除餐廳 | DELETE | /restaurants/<ID> |      無      |
| 新增餐廳 |  POST  |   /restaurants    | name: 餐廳名 |
| 更改餐廳 | PATCH  | /restaurants/<ID> | name: 餐廳名 |
