// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    const strArray = str.split("")
    let reversed = ''
    strArray.forEach(letter => {
        reversed = `${letter}${reversed}`
    });
    return reversed
}

module.exports = reverse;
