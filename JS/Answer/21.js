// 題目：setTimeout 和 Promise 的執行順序
// 題目描述：
// 以下是幾段 JavaScript 代碼，請根據代碼中的順序和執行時的延遲，預測 console.log 輸出的順序。

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

// 請回答以下問題：
// 請預測這段代碼的 console.log 輸出的順序是什麼？
// 為什麼會有這樣的順序？

// A D C B