// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    let grid = []

    for (let idx = 0 ; idx < n ; idx++) {
        let zeros = []
        for (let idx2 = 0 ; idx2 < n ; idx2++) {
            zeros.push(0)
        }
        grid.push(zeros)
    }

    let currentColumn = 0
    let currentRow = 0

    let left = 0
    let right = n - 1
    let top = 0
    let bottom = n - 1

    
    for (let nextAddition = 1 ; nextAddition <= n * n ; nextAddition++) {

        grid[currentRow][currentColumn] = nextAddition

        if (currentRow === top && currentColumn !== right && ( n%2 === 1 || currentRow !== bottom) ) {

            currentColumn++

            if (currentColumn === right) {
                top++
            }

        } else if (currentColumn === right && currentRow !== bottom) {

            currentRow++
            if (currentRow === bottom) {
                right--
            }

        } else if (currentRow === bottom && currentColumn !== left) {

            currentColumn--

            if (currentColumn === left) {
                bottom--
            }

        } else if (currentColumn === left && currentRow !== top) {

            currentRow--

            if (currentRow === top) {
                left++
            }

        } else {
            return
        }

    }

    console.log(grid)
    return grid
}

module.exports = matrix;
