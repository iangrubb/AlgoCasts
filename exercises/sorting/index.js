// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    for (let j = 0 ; j < arr.length ; j++) {
        for (let k = 0 ; k < arr.length - j - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                const holder = arr[k]
                arr[k] = arr[k + 1]
                arr[k+1] = holder
            }
        }
    }
    return arr
}

function selectionSort(arr) {

    for (let i = 0 ; i < arr.length ; i++) {

        indexOfMin = i

        for (let j = i ; j < arr.length ; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j
            }
        }

        if (indexOfMin !== i) {
            const actualMin = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = actualMin
        }


    }

    return arr

}

function mergeSort(arr) {

    if (arr.length > 1) {
        const mid = Math.floor(arr.length / 2)

        const left = mergeSort(arr.slice(0, mid))
        const right = mergeSort(arr.slice(mid, arr.length))

        return merge(left, right)
    } else {
        return arr
    }

    

}

function merge(left, right) {
    const merged = []
    while (left.length > 0 && right.length > 0) {
        const smaller = left[0] < right[0] ? left : right
        merged.push(smaller.shift())
    }
    return [...merged, ...left , ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
