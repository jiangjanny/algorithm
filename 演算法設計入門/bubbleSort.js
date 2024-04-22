function bubbleSort(arr) {
    let step = 0
    for (let i = 0; i <= arr.length - 2; i++) {
        let swapping = false
        for (let j = arr.length - 1; j >= i + 1; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                step++
                swapping = true
            }
        }
        if (!swapping) break
    }
    console.log(`It takes ${step} steps to sort the array`)
    console.log('arr', arr)
}

bubbleSort([5, 4, 3, 2, 1])
// n =5
// 1/2 * n^2 - 1/2 * n
// 25/2 - 5/2 = 10

let num = []

for (let i = 0; i < 100; i++) {
    num.push(Math.floor(Math.random() * 100))
}

bubbleSort(num)
