// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(item, next = null) {
        this.data = item
        this.next = next
    }


}

class LinkedList {

    constructor() {
        this.head = null
    }

    insertFirst(data) {
        const node = new Node(data, this.head)
        this.head = node
    }

    size() {
        let counter = 0
        let current = this.head
        while (current && counter < 50) {
            counter++
            current = current.next
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let candidate = this.head
        if (!candidate) {
            return null
        }
        while (candidate.next) {
            candidate = candidate.next
        }
        return candidate
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next
        } else {
            return
        }
        
    }

    removeLast() {
        let candidate = this.head
        if (!candidate) {
            return 
        } else if (candidate.next) {
            while (candidate.next.next) {
                candidate = candidate.next
            }
            candidate.next = null
        } else {
            this.head = null
        }
    }

    insertLast(data) {

        const last = this.getLast()
        const newEnd = new Node(data)
        if (last) {
            last.next = newEnd
        } else {
            this.head = newEnd
        }
    }

    getAt(index) {
        let counter = 0
        let current = this.head
        while (counter < index && current) {
            counter++
            current = current.next
        }
        return current
    }

    removeAt(index) {
        
        if (index === 0) {
            const target = this.head

            if (!target) {
                return
            } else {
                this.head = target.next
            }

        } else {
            const previous = this.getAt(index - 1)

            if (!previous) {
                return
            } else {
                const target = previous.next

                if (!target) {
                    return
                } else {
                    previous.next = target.next
                }
            }   
        }
    }

    insertAt(data, index) {

        const added = new Node(data)

        if (index === 0) {
            const following = this.head
            added.next = following
            this.head = added
        } else {
            let counter = 1
            let previous = this.head
            while (counter < index && previous.next) {
                counter++
                previous = previous.next
            }
            added.next = previous.next
            previous.next = added
        }
    }

    forEach(callback) {

        let current = this.head
        let index = 0
        while (current) {
            callback(current, index)
            index++
            current = current.next
        }
        

    }

    *[Symbol.iterator]() {
        let node = this.head
        while (node) {
            yield node
            node = node.next
        }
    }




}

module.exports = { Node, LinkedList };
