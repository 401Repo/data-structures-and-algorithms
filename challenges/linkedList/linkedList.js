'use strict';

// User defined class node 
class Node { 
    // constructor 
    constructor(data)
    
    // need to ALWAYS use 'data'
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
                if (data === current.data){ 
                    isInList = true; 
                    return isInList; 
                }

                current = current.next; 
            } 
          
            // not found


            
            return isInList; 
        } 
    }

    toString(){

        let output = '{ ';
        let words = '';
        let middle = ' } -> {';
        let end = ' NULL'

        let current = this.head;

        while(current){


                words += `{ ${current.data} } -> `;
                current = current.next;

         }
         words += end;
         return words;
    }



    //Art by Hayley Jane Wakenshaw: code challenge 6 functions bellow ruber ducks *QUACK*
  //_      _      _
  //>(.)__ <(.)__ =(.)__
  //(___/  (___/  (___/  hjw

  append(data){

//lets make a new node
    let node = new Node(data);

    // lets define the current node
    let current;

    if(this.head == null){
        this.head = node;
    } else{
        current = this.head;

        while( current.next){
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
  }


  insertBefore(data, newNum) {

    var node = new Node(newNum);
    
    let current = this.head;
    
    let previous = null;
    
    while(current) {
    
        if(current.data === data) {
    
            if(previous === null) {
    
                this.head = node;
    
            } else {
    
                previous.next = node;
    }
    
    node.next = current;
   
    break;
   
}
previous = current;

current = current.next;

}

this.size++;

}


    insertAfter(data, newNum){

        // lets make a node
        let node = new Node(newNum);
        let current = this.head;

        while(current){
            if(current.data === data){
                node.next = current.next;
                current.next = node;
                break;
            }
            if(current.next===null){
                current.next = node;
            }
            current = current.next;
        }

        this.size++;



    }



   ///// from the end data

       //Art by Hayley Jane Wakenshaw: Code 7 function bellow ruber ducks *QUACK*
  //_      _      _
  //>(.)__ <(.)__ =(.)__
  //(___/  (___/  (___/  hjw

   kFromEnd(data) {
    
    let nodesInList = 0;

    let current = this.head;

    if(data < 0) {
        return 'Use positive interger please!';
    }


    while(current) {

        nodesInList++;

        current = current.next;

    }

    let kFromHead = nodesInList - 1 - data;

    if(kFromHead < 0 || kFromHead < 0) {

        return 'Error in the list: sorry!';

    }

    current = this.head;

    while(kFromHead > 0) {

        kFromHead--;

        current = current.next;

    }


    return current.data;
   }

       //Art by Hayley Jane Wakenshaw: code challenge 8 functions bellow ruber ducks *QUACK*
  //_      _      _
  //>(.)__ <(.)__ =(.)__ // we need to zip two list together
  //(___/  (___/  (___/  hjw


    zipTwoLL(list2) {

    let current = this.head;

    let current2 = list2.head;

    // instead of a new node i need a whole new LL to add all my nodes
    let zipperList = new LinkedList();

    while(current  || current2) {

        if(current){
        zipperList.append(current.data);
        current = current.next;
        }
        if(current2){
            zipperList.append(current2.data);
            current2 = current2.next;
            }
    }

    return zipperList.toString();
   }

}

module.exports = LinkedList;

// tutorial at https://www.youtube.com/watch?v=ZBdE8DElQQU

// const l = new LinkedList();

// l.insert(1);
// l.insert(2);

// console.log(l.toString());

// const l2 = new LinkedList();

// l2.insert(50);
// l2.insert(60);

// console.log(l2.zipTwoLL(l));


// l.kFromEnd(1,2);

// console.log(l.kFromEnd(0));


