// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

    const leftCheck =
        !node.left ||
        (!min && node.left.data < node.data && validate(node.left, min, node.data)) ||
        (min < node.left.data && node.left.data < node.data && validate(node.left, min, node.data))

    const rightCheck = 
        !node.right ||
        (!max && node.right.data > node.data && validate(node.right, node.data, max)) ||
        (max > node.right.data && node.right.data > node.data && validate(node.right, node.data, max))
    
    return leftCheck && rightCheck

}

module.exports = validate;
