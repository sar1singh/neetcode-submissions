class Node {
    constructor(val = null) {
        this.value = val;
        this.next = null;   
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head
        let i = 0;
        while (current !==null && i < index) {
            current = current.next;
            i++
        }
        if(current !== null && i === index) {
            return current.value
        }
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new Node(val);
        if(this.head == null) {
            this.head = newNode
            return;
        }
        let current = this.head;
        while(current != null && current.next != null) {
            current = current.next
        }
        if(current.next == null) {
        current.next = newNode
        return;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
       if(index < 0 || this.head == null) return false;
       if(index == 0) {
        this.head = this.head.next
        return true;
       }
       let current = this.head
       let i = 0;
       while(current !=null && i < index - 1) {
        current = current.next
        i++
       }
        if(current == null || current.next == null) {
            return false;
        }

        current.next = current.next.next;
        return true
    }

    /**
     * @return {number[]}
     */
    getValues() {
        console.log(this.head)
        let current = this.head
        let values =[];
        while(current !=null) {
            values.push(current.value)
            current = current.next
        }
        return values;
    }
}
