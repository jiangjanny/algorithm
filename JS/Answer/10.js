// 數組去重 寫一個函數，接受一個數組，並返回一個新的數組，該數組包含去重後的所有元素。
function uniqueArray(arr) {
    return arr.reduce((acc, item) => {
        console.log(acc, item);
        
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}

console.log(uniqueArray([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

  