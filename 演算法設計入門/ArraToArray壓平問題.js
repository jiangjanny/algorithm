let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];


let result = []

function collector(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (Array.isArray(element)) {
            collector(arr[i])
        } else {
            result.push(arr[i])
        }

    }
}

function collectors(arr) {
    let result = [];
    let stack = [...arr];

    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }

    return result.reverse();
}

let ddd = collectors(arrs)
console.log('ddd', ddd);
collector(arrs)




// 使用 Infinity 作为深度参数
let resultA = arrs.flat(Infinity);

// console.log(resultA); // 输出 ["a", "b", "c", "d", "e", "f", "g", "h"]