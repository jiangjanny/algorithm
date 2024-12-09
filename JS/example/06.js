// 題目 6: Promise 與鏈式調用
// 題目： 寫一個 processData 函數，它接受一個數字並返回一個 Promise。
// 該 Promise 成功時返回該數字的平方。如果傳入的是負數，則返回一個拒絕的 Promise，錯誤信息為 "Number must be positive"。

// 使用 .then() 和 .catch() 進行鏈式調用，計算數字的平方，並處理錯誤。

function fetchDataFromAPIs() {
    const api1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("API 1 data"), 1000);
    });

    const api2 = new Promise((resolve, reject) => {
        setTimeout(() => reject("API 2 failed"), 1500);
    });

    const api3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("API 3 data"), 500);
    });

    // 使用 Promise.allSettled 處理這些 API 請求
}


fetchDataFromAPIs()
    .then(results => {
        console.log(results);
        // 預期：[
        //   { status: 'fulfilled', value: 'API 1 data' },
        //   { status: 'rejected', reason: 'API 2 failed' },
        //   { status: 'fulfilled', value: 'API 3 data' }
        // ]
    })
    .catch(error => {
        console.error(error);
    });
