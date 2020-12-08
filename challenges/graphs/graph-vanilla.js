'use strict';


class Queue {
    constructor() {
        this.front = null;
        this.storage = [];
    }
  

    enqueue(value) {
        if (this.front === null) {this.front = value}
        return this.storage.push(value)
    }
  

    dequeue() {
        if (this.front === null) {
            return null;
        } else {
            if (this.storage[1] === undefined) {
                this.front = null;
            } else {
                this.front = this.storage[1];
            }
            return this.storage.shift();
        }
    }
  
    peek() {
        return this.front;
    }

    isEmpty() {
        return this.storage.length ? false : true;
    }
  }
  
  class Node{
    constructor(value) {
      this.value = value;
    }
  }
  
  class Edge{
    constructor(node, weight = 1){
      this.node = node;

      // weight is for cash needed for the flights
      this.weight = weight;

      //this.cash = cash;
    }
  }
  
  class Graph{
    constructor(){
      this.adjacencyList = new Map();
    }
  
    
    addNode(node){
      if (!this.adjacencyList.has(node)) {
        return this.adjacencyList.set(node, []);
      }
    }
  
    addEdge(node1, node2, weight = 1){
      if (!this.adjacencyList.has(node1)) this.adjacencyList.set(node1, []);
      if (!this.adjacencyList.has(node2)) this.adjacencyList.set(node2, []);
  
      const neighborsOfNode1 = this.adjacencyList.get(node1);
      const neighborsOfNode2 = this.adjacencyList.get(node2);
  
      neighborsOfNode1.push(new Edge(node2,weight));
      neighborsOfNode2.push(new Edge(node1,weight));
    }
  
    getNodes(){
      return [... this.adjacencyList.keys()];
    }
  
    getNeighbors(node) {
      if (!this.adjacencyList.has(node)){
        return 'Sorry; this is not on the graph'
      }
      return this.adjacencyList.get(node)
    }
  
    getEdge(node1,node2) {
      let result = false
      const neighbors = this.getNeighbors(node1)
      neighbors.forEach( neighbor => {
        if (neighbor.node.value === node2.value) result = neighbor.weight
      })
  
      return result
    }
  
    size(){
      return this.adjacencyList.size;
    }
  

    breadthFirst(node) {
      let nodes = new Set() 
      let breadth = new Queue
      breadth.enqueue(node)
      nodes.add(node)
      
      while (!breadth.isEmpty()) {
        let front = breadth.dequeue()
        let list = this.getNeighbors(front)
        list.forEach(child => {
          if(!nodes.has(child.node)) {
            nodes.add(child.node)
            breadth.enqueue(child.node)
          }
        })
      }
      return [... nodes.keys()].map(node => node.value)
    }
  
  }
  
  module.exports = {
    Queue,
    Node,
    Edge,
    Graph
  }

