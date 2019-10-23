// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function charsOf(string) {
    const processed = string.replace(/[^\w]/g, "").toLowerCase()
    const chars = {}
    for (let char of processed) {
        chars[char] = chars[char] + 1 || 1
    }
    return chars
}

function anagrams(stringA, stringB) {

    let same = true

    const charsA = charsOf(stringA)
    const charsB = charsOf(stringB)
    
    for (let char in {...charsA, ...charsB}) {
        if (charsA[char] !== charsB[char]) {
            same = false
        }
    }

    return same
    
}

module.exports = anagrams;
