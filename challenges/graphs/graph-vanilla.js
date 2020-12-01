'use strict';

/*

Hi Adrian, i got help from here: https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/

*/

// I need a queue for the bft

class Queue {
    constructor() {
        this.items = [];
    }


    enqueue(element) {

        this.items.push(element);
    }

    dequeue() {

        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    front() { 
    // returns the Front element of  
    // the queue without removing it. 
    if(this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
}

    isEmpty() {

        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}


class Graph {
    
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

 

    addVertex(v) {
       
        this.AdjList.set(v, []);
    }
    addEdge(v, w) {
        
        this.AdjList.get(v).push(w);

        
        this.AdjList.get(w).push(v);
    }
    printGraph() {
       
        var get_keys = this.AdjList.keys();

      
        for (var i of get_keys) {
            
            var get_values = this.AdjList.get(i);
            var conc = "";

            
            for (var j of get_values)
                conc += j + " ";

           
            i + " -> " + conc;
        }
    }

    bfs(startingNode) {

        var visited = {};
        var visitedVertex = [];

        // console.log("in BFS");

        var q = new Queue();

        visited[startingNode] = true;
        q.enqueue(startingNode);
        // console.log(q, "q at start");

        // loop until queue is element
        while (!q.isEmpty()) {
            // get the element from the queue
            var getQueueElement = q.dequeue();
            

            // passing the current vertex to callback funtion
            // console.log(getQueueElement);
            visitedVertex.push(getQueueElement);
            // console.log(q, "q so far");

            // get the adjacent list for current vertex
            var get_List = this.AdjList.get(getQueueElement);

            // loop through the list and add the element to the
            // queue if it is not processed yet
            for (var i in get_List) {
                var neigh = get_List[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
        return visitedVertex;
    }
    // dfs(v)
}




module.exports = Graph;

