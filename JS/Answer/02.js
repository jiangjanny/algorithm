// 題目 2: Promise 錯誤處理
// 題目： 寫一個函數 fetchUserData，這個函數會返回一個 Promise。當用戶 ID 為 0 時，這個 Promise 會被拒絕並返回錯誤信息 "Invalid user ID"。
// 其他情況下，Promise 會成功並返回用戶數據。

function fetchUserData(userId) {
    // 請在這裡編寫代碼
    return new Promise((resolve, reject)=> {
        if(userId === 0){
            reject("Invalid user ID")
        }else{
            resolve({ id: userId, name: "John Doe" })
        }
    })

    // if (userId === 0) {
    //     throw new Error("Invalid user ID");
    // } else {
    //     return { id: userId, name: "John Doe" };
    // }
}



fetchUserData(0)
    .then(user => {
        console.log('0', user);
    })
    .catch(error => {
        console.log('0', error);  // 預期："Invalid user ID"
    });

fetchUserData(1)
    .then(user => {
        console.log('1', user);  // 預期：{ id: 1, name: "John Doe" }
    })
    .catch(error => {
        console.log('1', error);
    });
