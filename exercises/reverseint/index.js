// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverse(str) {

    const strArray = str.split("")
    let reversed = ''
    strArray.forEach(letter => {
        reversed = `${letter}${reversed}`
    });
    return reversed
}


function reverseInt(n) {

    const negative = n < 0
    const str = Math.abs(n).toString()
    const reversed = reverse(str)

    return parseInt(reversed) * (negative ? -1 : 1 )

}

module.exports = reverseInt;
