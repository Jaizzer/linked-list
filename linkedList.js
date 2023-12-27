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
            // If the head is null, the linked las has no node, therefore the appended node should be the head.
            this.head = Node;
        } else {
            // Point the current tail's next node pointer to the appended Node.
            this.tail.nextNode = Node;
        }
        // Set the appended Node as the new tail.
        this.tail = Node;

        // Update the linked list size.
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
        // Update linked list size.
        this.size++;
    }
}
