'use strict;'

// had help from: https://www.educative.io/blog/data-strucutres-hash-table-javascript

class HashTable {
    constructor() {
        this.values = {};
        this.length = 0;
        this.size = 0;
    }

    hash(key) {
        
        return key.toString().length % this.size;
        
    }

    add(key, value) {
        this.length++;
        this.size++;
        const hash = this.hash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {}
       
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            
        }
        this.values[hash][key] = value;
    }

    get(key) {
        const hash = this.hash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key];
        } else {
            return null;
        }
    }

    contains(key) {
        let exist = false;
        const hash = this.hash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return true;
        } else {
            return false;
        }
    }

}



//create object of type hash table
const ht = new HashTable();
//add data to the hash table ht
// ht.add("Canada", "300");
// ht.add("Germany", "100");
// ht.add("Italy", "50");

// //get
// console.log(ht.get("Italy"));

// //contains
// console.log(ht.contains("US"));

// console.log(ht);

// console.log(ht.hash("Italy"));
// console.log(ht.hash("Canada"));
// console.log(ht.hash("Germany"));
// console.log(ht.hash("US"));

module.exports = HashTable;




