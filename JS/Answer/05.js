// 題目 5: async/await 和 Promise 結合
// 題目： 寫一個 fetchDataWithDelay 函數，它模擬從 API 獲取數據，返回一個 Promise。該 Promise 會在延遲 1 秒後解析返回數據 "Data received"。
// 請使用 async/await 實現一個函數 getData，它等待這個 Promise 完成後再打印數據。

function fetchDataWithDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);  // 延遲 1 秒
    });
}

async function getData() {
    // 請使用 async/await 在這裡編寫代碼
    const data = await fetchDataWithDelay();  // 等待 fetchDataWithDelay 完成
    return data;  // 返回獲得的數據
}


getData()
    .then(data => {
        console.log(data);  // 預期："Data received"
    })
    .catch(error => {
        console.log(error);
    });
