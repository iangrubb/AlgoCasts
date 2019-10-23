// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function printable(poundSigns, total) {
    let str = ''
    for (let idx = 0 ; idx < total ; idx++) {
        str += (idx < poundSigns ? "#" : " ")
    }
    return str
}

function steps(n) {

    for (let idx = 1 ; idx <= n ; idx++) {
        console.log(printable(idx, n))
    }

}

module.exports = steps;
