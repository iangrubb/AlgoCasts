// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {

    let counter = 0
    let palSoFar = true

    while (palSoFar && counter < (str.length / 2) + 1) {
        if (str[counter] !== str[str.length - 1 - counter]) {
            palSoFar = false
        } else {
            counter++
        }
    }

    return palSoFar
}

module.exports = palindrome;
