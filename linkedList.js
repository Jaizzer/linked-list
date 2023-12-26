class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(Node = null) {
        this.size = 0;
        if (Node !== null) {
            this.append(Node);
        }
    }

    append(Node) {
        if (this.head === null) {
            this.head = Node;
        } else {
            this.tail.nextNode = Node;
        }
        this.tail = Node;
        this.size++;
    }
}
