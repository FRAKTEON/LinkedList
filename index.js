class Node {
    
    constructor(element, next) {
        this.value = element
        this.next = next
    }

}

class List {

    constructor()
    {
        this.head = null
    }

    push(element)
    {

        if (this.head == null) {
            this.head = new Node(element, null);
            return
        }

        let node = this.head

        while (node.next !== null) {
            node = node.next
        }

        node.next = new Node(element, null)
    }

    pop()
    {

        let node = this.head

        if(node===null)return null
        else if(node.next==null){this.head=null;return null}

        while (node.next.next !== null){
            node = node.next
        }

        node.next = null
    }

    clear()
    {
    this.head = null
    }

    remove(element)
    {
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

    reverse()
    {
        let head = this.head.value
        let tail = this.getTail()

        let node = this.head.next

        for(let x=0; x<this.getLength()-3; x++)
        {
            for(let i=0; i < this.getLength()-3-x; i++)
            {
                this.swap(node, node.next)
                node=node.next
            }
            node=this.head.next
         }

        this.head.value=tail.value
        tail.value = head
    }

    swap(prev, next)
    {
        let tempData = prev.value
        prev.value=next.value
        next.value=tempData
    }

    insertAfter(element, value)
    {
        let node = this.head
        let foundNode = this.find(element)

        while(node !== foundNode){
            node = node.next
        }

        let temp = node.next
        node.next = new Node(value, temp)

    }

    find(element)
    {
        let node = this.head
        if(node==null)return null

        while (node !== null) {
            if(element ===node.value)return node
            node = node.next
        }

        return null
    }
    
    print()
    {
        let x = this.head
        let length=this.getLength()

        console.log("         Linked List        ")
        console.log("----------------------------")
        for(let i=0; i < length; i++){
            if(i==0)console.log("Head - [Data: " + x.value+" , Next] ---> ")
            else if(i==length-1)console.log("Tail - [Data: " + x.value+" , Next] NULL ")
            else console.log("       [Data: " + x.value+" , Next] ---> ")
            x=x.next
        }
        console.log("----------------------------")
        console.log("      Number of nodes: "+length)
    }    
    
    sort()
    {
        let node = this.head
        let tempData
        const length=this.getLength()
        if(node==null)return

        for(let i = 0; i < length; i++){
            while (node.next !== null){
                if(node.value > node.next.value){
                    tempData=node.value
                    node.value=node.next.value
                    node.next.value=tempData
                }
                node = node.next
            }
            node = this.head
        }

    }

    getLength()
    {
        let listLength=0
        let node = this.head

        if(node==null)return listLength
        listLength=1

        while (node.next !== null){
            listLength++
            node=node.next
        }

        return listLength
    }

    getHead()
    {
        return this.head
    }

    getTail()
    {
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
        "- find(element)\n")
}
const list = new List()
console.log("Type cmds() for a list of commands.")



