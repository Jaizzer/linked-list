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

    at(index) {
        if (this.size === 0) {
            return null;
        }

        // Traverse the linked list.
        let nodeAtIndexI;
        for (let i = 0; i < index; i++) {
            if (i === 0) {
                nodeAtIndexI = this.head;
            }
            // Move to the next node.
            nodeAtIndexI = nodeAtIndexI.nextNode;
        }
        return nodeAtIndexI;
    }

    pop() {
        if (this.size > 0) {
            // Traverse the linked list until the Node before the tail is reached.
            let nodeAtIndexI;
            for (let i = 0; i < this.size - 1; i++) {
                if (i === 0) {
                    nodeAtIndexI = this.head;
                }
                // Move to the next node.
                nodeAtIndexI = nodeAtIndexI.nextNode;
            }
            // Point the Node before the tail to null.
            nodeAtIndexI.next = null;

            // Replace the tail.
            this.tail = nodeAtIndexI;

            // Upate the linked list size.
            this.size--;
        }
    }
}
