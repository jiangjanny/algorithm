// 題目 3: 使用 Promise 解決並發限制
// 題目： 假設你有一個並發請求數組，每個請求都返回一個 Promise。
// 但由於 API 限制，你只能同時處理最多 3 個請求。
// 寫一個 limitConcurrency 函數，它接受一個 Promise 數組和最大並發數，並依次處理這些請求，
// 但每次最多同時處理 maxConcurrency 個請求。


async function limitConcurrency(promises, maxConcurrency) {
    let results = [];
    const executing = []; // 用來儲存當前正在執行的 Promise

    

    for (let i = 0; i < promises.length; i++) {
        
        const promise = promises[i].then(result => {
            results[i] = result; // 保存結果
        });

        // 把當前 Promise 加入 executing 陣列
        executing.push(promise);

        // 當 executing 中的 Promise 數量達到 maxConcurrency 時，等待最早的 Promise 解決

        
        if (executing.length >= maxConcurrency) {
            await Promise.race(executing); // 等待最早的 Promise 完成
            executing.splice(executing.findIndex(p => p === results), 1); // 移除已完成的 Promise
        }
    }

    
    // // 等待所有 Promise 完成
    await Promise.all(executing);
    return results;
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
