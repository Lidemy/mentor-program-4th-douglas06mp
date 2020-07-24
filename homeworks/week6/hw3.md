## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. **canvas** HTML 畫板，可在裡面繪製各種圖案及動畫
2. **progress** 進度條，使用 max 和 value attribute，顯示進度條長度
3. **dialog** 對話視窗， 使用 open attribute 控制顯示與否

## 請問什麼是盒模型（box model）

HTML 元素可視為一個 box，在 CSS 中 box 從內到外會由 content、padding、border、margin 所組成，稱為 box model

**content-box** 設定寬高時，會等同 content 的寬與高

**border-box** 設定寬高時，會等同 content + padding + border 的寬與高

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

**inline** 不佔據一整行，與其他 inline 元素併排，無法調整寬高、上下 margin

**block** 佔據一整行，寬高和縱向橫向的 margin、padding 皆可調整

**inline-block** 不佔據一整行，與其他 inline 元素併排，但寬高和縱向橫向的 margin、padding 皆可調整

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

**static** 預設定位，正常排版流

**relative** 相對定位，正常排版流，根據預設位置調整位置

**absolute** 絕對定位，脫離正常排版流，參考點為往父元素找找到不是預設定位 static 的元素，根據該元素調整位置

**fixed** 固定定位，脫離正常排版流，根據瀏覽器視窗決定位置
