// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor () {
        this.mainStack = new Stack
        this.helperStack = new Stack
    }

    expose() {
        while (this.mainStack.peek()) {
            this.helperStack.push(this.mainStack.pop())
        }
    }

    revert() {
        while (this.helperStack.peek()) {
            this.mainStack.push(this.helperStack.pop())
        }
    }

    add(item) {
        this.mainStack.push(item)
    }

    remove() {
        this.expose()
        const item = this.helperStack.pop()
        this.revert()
        return item
    }

    peek() {
        this.expose()
        const item = this.helperStack.peek()
        this.revert()
        return item
    }

}

module.exports = Queue;
