// 題目 1: 基本的 Promise 使用
// 題目： 寫一個函數 fetchData，這個函數會返回一個 Promise，模擬從 API 獲取數據。
// 這個 Promise 會在 2 秒後成功返回一個對象 { success: true, message: 'Data fetched successfully' }。

function fetchData() {
    // 請在這裡編寫代碼
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ success: true, message: 'Data fetched successfully' })
        }, 2000);
    })
}

fetchData().then(response => {
        console.log(response);  // 預期：{ success: true, message: 'Data fetched successfully' }
    })
    .catch(error => {
        console.error(error);
    });