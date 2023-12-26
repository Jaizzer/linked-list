class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(Node = null) {
        this.head = Node;
        this.tail = Node;
    }

    append(Node) {
        if (head === null) {
            this.head = Node;
        } else {
            this.tail.nextNode = Node;
        }
    }
}
