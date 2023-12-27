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

    prepend(Node) {
        if (this.head === null) {
            // If the head is null, the linked list has no node, therefore the prepended node should be both the head and tail.
            this.head = Node;
            this.tail = Node;
        } else {
            // Store current head to temp.
            temp = this.head;

            // Replace current head with new Node.
            this.head = Node;

            // Point new head to the former head.
            this.head.nextNode = temp;
        }
        this.size++;
    }
}
