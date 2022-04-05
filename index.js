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
        let x = this.head
        let tempData
        const length=this.getLength()
        if(x==null)return
        console.log(length)

        for(let i = 0; i < length; i++)
            while (x.next !== null){
                if(x.value > x.next.value){
                    tempData=x.value
                    x.value=x.next.value
                    x.next.value=tempData
                }
                x = x.next
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

}

const list = new List()



