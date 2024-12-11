// debounce 是一種用來限制高頻事件觐发的技術，通常用於處理如滾動、按鍵輸入、窗口調整大小等高頻繁的事件。
// 它的目的是在事件頻繁觸發時，延遲處理，直到一段時間內事件不再觸發為止。這樣可以減少不必要的運算，提高性能。

// Debounce 函數的工作原理：
// 每次事件觸發時，都會設置一個計時器。
// 如果在這段時間內該事件再次觸發，則會清除之前的計時器並重新開始計時。
// 只有當事件停止觸發並且計時器到期時，才會執行相應的處理函數。

// return function(...args) {
//     // 清除之前的計時器
//     clearTimeout(timer);

//     // 設置新的計時器
//     timer = setTimeout(() => {
//         func.apply(this, args); // 執行實際的函數
//     }, delay);
// };


function debounce(func, delay){
    let time = 0
    return function(...args){
        clearTimeout(time);
        time = setTimeout(()=> {
            func.apply(this, args)
        }, delay)
        
    }
}

function dd(){
    console.log(33);
}
debounce(dd(), 20000)
