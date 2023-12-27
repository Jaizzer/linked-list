class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(Node = null) {
        this.size = 0;
        this.head = null;
        this.tail = null;
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
            let temp = this.head;

            // Replace current head with new Node.
            this.head = Node;

            // Point new head to the former head.
            this.head.nextNode = temp;
        }
        // Update linked list size.
        this.size++;
    }

    at(index) {
        if (this.size === 0 || index < 0) {
            return null;
        }

        // Traverse the linked list.
        let nodeAtIndexI = this.head;
        for (let i = 0; i < index; i++) {
            // Move to the next node.
            nodeAtIndexI = nodeAtIndexI.nextNode;
        }
        return nodeAtIndexI;
    }

    pop() {
        if (this.size > 0) {
            // Traverse the linked list until the Node before the tail is reached.
            let currentNode = this.head;
            while (true) {
                // Find the last node.
                if (currentNode.nextNode.nextNode === null) {
                    // Remove last node.
                    currentNode.nextNode = null;

                    // Change the tail to the new last Node.
                    this.tail = currentNode;

                    // Upate the linked list size.
                    this.size--;

                    break;
                }
                // Move to the next Node.
                currentNode = currentNode.nextNode;
            }
        }
    }

    contains(value) {
        // Return false since the value wouldn't be contained in an empty linked list.
        if (this.size === 0) {
            return false;
        }

        // Traverse the linked list.
        let currentNode = this.head;
        do {
            // Find the value.
            if (currentNode.value === value) {
                return true;
            }
            // Move to the next Node.
            currentNode = currentNode.nextNode;
        } while (currentNode !== null);
        return false;
    }

    find(value) {
        // Return null since the value wouldn't be contained in an empty linked list.
        if (this.size === 0) {
            return null;
        }

        // Traverse the linked list.
        let currentNode = this.head;
        do {
            // Find the node that contains the value to look for.
            if (currentNode.value === value) {
                return currentNode;
            }
            // Move to the next Node.
            currentNode = currentNode.nextNode;
        } while (currentNode !== null);
        return null;
    }

    toString() {
        // Initialize stringified linked list.
        let stringifiedLinkedList = '';

        // Traverse the linked list.
        let currentNode = this.head;
        while (true) {
            // Check if linked list end is already reached.
            if (currentNode === null) {
                stringifiedLinkedList += `null`;
                break;
            }
            // Append current stringified Node.
            stringifiedLinkedList += `(${currentNode.value}) -> `;

            // Move to the next Node.
            currentNode = currentNode.nextNode;
        }
        // Print the stringified linked list.
        console.log(stringifiedLinkedList);
    }

    insertAt(Node, index) {
        if (this.size > index && index >= 0) {
            if (index === 0) {
                // Node insertion at the beginning of the linked list.
                this.prepend(Node);
            } else if (index === this.size) {
                // Node insertion at the end of the linked list.
                this.append(Node);
            } else {
                // Node insertion at the middle of the linked list.
                let nodeAtIndexI = this.head;
                for (let i = 0; i < index - 1; i++) {
                    nodeAtIndexI = nodeAtIndexI.nextNode;
                }
                // Update pointers to insert the new Node.
                const temp = nodeAtIndexI.nextNode;
                nodeAtIndexI.nextNode = Node;
                Node.nextNode = temp;

                // Update linked list size.
                this.size++;
            }
        }
    }

    removeAt(index) {
        if (this.size > index && index >= 0) {
            if (index === 0) {
                // Node deletion at the beginning of the linked list.
                // Update pointers.
                const temp = this.head;
                this.head = this.head.nextNode;
                temp.nextNode = null;

                // Update linked list size.
                this.size--;
            } else if (index === this.size - 1) {
                // Node deletion at the end of the linked list.
                this.pop(); // .pop() already takes care of linked list size updating
            } else {
                // Node deletion at the middle of the linked list.
                let nodeAtIndexI = this.head;
                for (let i = 0; i < index - 1; i++) {
                    nodeAtIndexI = nodeAtIndexI.nextNode;
                }
                // Update pointers to delete the Node.
                const temp = nodeAtIndexI.nextNode;
                nodeAtIndexI.nextNode = nodeAtIndexI.nextNode.nextNode;
                temp.nextNode = null;

                // Update linked list size.
                this.size--;
            }
        }
    }
}
