let unsorted = [14, -4, 17, 6, 22, 1, -5]
selectionSort(unsorted)

function selectionSort(array) {
    for (let i = 0; i < array.length - 2; i++) {
        let minIndex = i
        let swapping = false
        for (let j = i; j <= array.length - 1; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
                swapping = true
            }
        }
        if (!swapping) break
        let temp = array[minIndex]
        array[minIndex] = array[i]
        array[i] = temp
    }
    console.log('array', array)
}
