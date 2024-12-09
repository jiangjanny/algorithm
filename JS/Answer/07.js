// 題目 1: 串行執行的 Promise 管道
// 題目： 寫一個 processInSequence 函數，這個函數接受一個數字數組並依次處理它們。每次處理需要返回一個 Promise，該 Promise 解析為處理結果。每個處理步驟會延遲 1 秒，並且返回該數字的平方。
// 所有的 Promise 必須依次執行，而不是並行執行。

function processInSequence(numbers) {
    return numbers.reduce((promiseChain, number) => {        
        return promiseChain.then(result => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([...result, number * number]);
                }, 1000); // 延遲 1 秒鐘
            });
        });
    }, Promise.resolve([])); // 初始的 Promise 為一個已解決的空數組
}

processInSequence([1, 2, 3, 4])
    .then(results => {
        console.log(results);  // 預期：[1, 4, 9, 16]
    })
    .catch(error => {
        console.error(error);
    });
