// https://edabit.com/challenge/z6Pxiw289JtaE2ndL

function search(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            return i
        }
    }
    return -1
}

// function search(arr, item) {
//     return arr.indexOf(item)
// }