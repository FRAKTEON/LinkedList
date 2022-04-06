class Node {
    
    constructor(element, next) {
        this.value = element
        this.next = next
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

        let node = this.head

        if(node===null)return null
        else if(node.next==null){this.head=null;return null}

        while (node.next.next !== null){
            node = node.next
        }

        node.next = null
    }

    clear(){
    this.head = null
    }

    remove(element) {
        let node = this.head
        let removedNode = this.find(element)

        if(node === removedNode){
            this.head=node.next
            return null
        }

        while(node.next !== removedNode){
            node = node.next
        }

        node.next = node.next.next
    }

    reverse() {
    }

    insertAfter(element, value){
        let node = this.head
        let foundNode = this.find(element)

        while(node !== foundNode){
            node = node.next
        }

        let temp = node.next
        node.next = new Node(value, temp)

    }

    find(element) {
        let node = this.head
        if(node==null)return null

        while (node !== null) {
            if(element ===node.value)return node
            node = node.next
        }

        return null
    }
    
    print() {
        let x = this.head
        let length=this.getLength()

        console.log("    Linked List    ")
        console.log("-------------------")
        for(let i=0; i < length; i++){
            console.log("Node ("+i+"): "+x.value)
            x=x.next
        }
        console.log("-------------------")
        console.log("Number of nodes: "+length)
    }    
    
    sort() {
        let x = this.head
        let tempData
        const length=this.getLength()
        if(x==null)return

        for(let i = 0; i < length; i++){
            while (x.next !== null){
                if(x.value > x.next.value){
                    tempData=x.value
                    x.value=x.next.value
                    x.next.value=tempData
                }
                x = x.next
            }
        x = this.head
        }

    }

    getLength(){
        let listLength=0
        let x = this.head

        if(x==null)return listLength
        listLength=1

        while (x.next !== null){
            listLength++
            x=x.next
        }

        return listLength
    }

    getHead(){
        return this.head
    }

    getTail(){
        let node = this.head
        while(node.next !== null){
            node=node.next
        }
        return node
    }

}

function cmds(){
    console.log("- list\n" +
        "- print()\n" +
        "- push(element)\n" +
        "- insertAfter(element, value)\n" +
        "- pop()\n" +
        "- remove(element)\n" +
        "- clear()\n" +
        "- reverse()\n" +
        "- sort()\n" +
        "- find(element)\n" +
        "- getLength\n" +
        "- getHead\n" +
        "- getTail")
}
const list = new List()
console.log("Type cmds() for a list of commands.")



