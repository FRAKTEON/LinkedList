class Node {
    
    constructor(element, next) {
        this.value = element
        this.next = next
    }

    insertAt(){
    }
}

class List {

    constructor() {
        this.head = null

    }

    push(element) {

        if (this.head == null) {
            this.head = new Node(element, null);
            return
        }

        let x = this.head

        while (x.next !== null) {
            x = x.next
        }

        x.next = new Node(element, null)
    }

    pop() {

        let x = this.head

        if(x==null)return
        else if(x.next==null){this.head=null;return}

        while (x.next.next !== null){
            x = x.next
        }

        x.next = null
    }

    remove() {
    }

    reverse() {
    }
    
    find() {
    }
    
    print() {
    }    
    
    sort() {
    }
}

const list = new List()


