// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function printable(poundSigns, total) {
    let str = ''
    for (let idx = 0 ; idx < total ; idx++) {
        str += (idx < poundSigns ? "#" : " ")
    }
    return str
}

function pyramid(n) {

    for (let row = 0 ; row < n ; row++) {

        let part = printable(row, n - 1)

        console.log(part.split("").reverse().join("") + "#" + part)
    }

}

module.exports = pyramid;
