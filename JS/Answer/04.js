// 題目 4: Promise.race 的應用
// 題目： 寫一個函數 fetchDataWithTimeout，該函數接受一個時間限制參數 timeout（毫秒），
// 並模擬從 API 獲取數據。如果超過 timeout 時間，則返回錯誤 "Request timed out"。否則，返回獲取的數據。


function fetchDataWithTimeout(timeout) {
    const fetchDataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);  // 模擬 API 請求需要 2 秒鐘
    });

    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Request timed out");
        }, timeout);
    });

    // 使用 Promise.race 解決這個問題，race 會返回最快解決的 Promise
    return Promise.race([fetchDataPromise, timeoutPromise]);
}

fetchDataWithTimeout(4500)
    .then(data => {
        console.log(data);  // 如果請求超過 1500 毫秒，預期："Request timed out"
    })
    .catch(error => {
        console.error(error);  // 如果超過 timeout，將會捕獲錯誤並輸出
    });
