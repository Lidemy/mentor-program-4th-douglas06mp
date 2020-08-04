## 什麼是 DOM？

Document Object Model 文件物件模型，將 HTML 的 node 或 element 以樹狀結構組合起來的模型

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

事件傳遞機制的順序: capture phase(捕獲) -> target phase(目標) -> bubble phase(冒泡)
捕獲: 點擊一個 target 時，點擊事件從 window 一路向下傳到 target 的過程
冒泡: 捕獲和 target 階段結束後，點擊事件從 target 一路向上傳到 window 的過程

## 什麼是 event delegation，為什麼我們需要它？

event delegation 事件代理，當多個同層級子元件且都有相同的 event handler，利用事件傳遞的冒泡機制，在父元件上經過判斷後執行 event handler，減少在子元件上重複且瑣碎的事件綁定

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

event.preventDefault() 取消預設行為，如表單提交時防止頁面跳轉

event.stopPropagation() 取消事件傳遞，把事件傳遞的過程終止，如當子元件與父元件都有點擊事件時，點擊子元件同時也會觸發父元件的點擊事件，這時就會希望把事件傳遞在子元件上停止，不會觸發父元件的點擊事件
