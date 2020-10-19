'use strict';

// User defined class node 
class Node { 
    // constructor 
    constructor(data, next = null) 
    { 
        this.data = data; 
        this.next = null
    } 
} 

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data){

        let node = new Node(data); 
  
        // to store current node 
        let current; 
      
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
      
            // iterate to the end of the 
            // list 
            while (current.next) { 
                current = current.next; 
            } 
      
            // add node 
            current.next = node; 
        } 
        this.size++;

    }

    includes(data){
        { 
            let isInList = false;
            let count = 0; 
            let current = this.head; 
          
            // iterate over the list 
            while (current != null) { 
                // compare each element of the list 
                // with given element 
                if (current.element === data) 
                    return count; 
                count++; 
                current = current.next; 
            } 
          
            // not found
            if(count > 0){
                isInList = true;
            } else {
                isInList = false;
            }
            return isInList; 
        } 
    }

    toString(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll = new LinkedList();

ll.insert(200);


console.log(ll);

console.log(ll.includes(200));

// module.exports = LinkedListNode;

// tutorial at https://www.youtube.com/watch?v=ZBdE8DElQQU

ll.toString();