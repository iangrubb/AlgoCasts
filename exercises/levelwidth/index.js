// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {

    const result = [1]
    let counter = 0
    let currentLevel = root.children
    let nextLevel = []

    while (currentLevel.length > 0) {

        counter++
        const node = currentLevel.shift()
        nextLevel.push(...node.children)

        if (currentLevel.length === 0) {
            result.push(counter)
            counter = 0
            currentLevel = nextLevel
            nextLevel = []
        }
    }

    return result

}

module.exports = levelWidth;
