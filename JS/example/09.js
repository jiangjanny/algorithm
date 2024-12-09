// 題目 3: 使用 Promise 解決並發限制
// 題目： 假設你有一個並發請求數組，每個請求都返回一個 Promise。
// 但由於 API 限制，你只能同時處理最多 3 個請求。
// 寫一個 limitConcurrency 函數，它接受一個 Promise 數組和最大並發數，並依次處理這些請求，
// 但每次最多同時處理 maxConcurrency 個請求。


function limitConcurrency(promises, maxConcurrency) {
   
   
}

// 測試代碼
const promises = [
    new Promise(resolve => setTimeout(() => resolve("Request 1"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Request 2"), 500)),
    new Promise(resolve => setTimeout(() => resolve("Request 3"), 1500)),
    new Promise(resolve => setTimeout(() => resolve("Request 4"), 200)),
    new Promise(resolve => setTimeout(() => resolve("Request 5"), 800)),
];

limitConcurrency(promises, 3)
    .then(results => {
        console.log(results); 
        // 預期：["Request 1", "Request 2", "Request 3", "Request 4", "Request 5"]
    })
    .catch(error => {
        console.error(error);
    });
