'use strict';

const { Queue, Node, Edge, Graph } = require ('../graph-vanilla')


describe('Testing graphs', () => {

    const g = new Graph

    const node1 = new Node('US')
    const node2 = new Node('Canada')
    const node3 = new Node('Mexico')
    const node4 = new Node('Atlantis')
    const node5 = new Node('Wonderland')
    const node6 = new Node('Guam')
  
  /*
  Come on Adrian, get a Pina colada on!
  */
  
    g.addNode(node1)
    g.addNode(node2)
    g.addNode(node3)
    g.addNode(node4)
    g.addNode(node5)
    g.addNode(node6)
  
    g.addEdge(node1,node2,100)
    g.addEdge(node1,node3,150)
    g.addEdge(node2,node3,200)
    g.addEdge(node2,node4,250)
    g.addEdge(node3,node4,300)
    g.addEdge(node3,node5,350)
    g.addEdge(node4,node6,100)
    g.addEdge(node5,node6,100)
  
    it('Breath first Transversal', () => {
        expect(g.breadthFirst(node1)).toEqual([ 'US', 'Canada', 'Mexico', 'Atlantis', 'Wonderland', 'Guam' ]);
    });
    it('Should be able to get the graph size', () => {

        expect(g.size()).toEqual(6);
    });
    it('We get a cash value for trips between graph vertexes', () => {

        expect(g.getNeighbors(node6)[0].weight).toEqual(100)
    });
    it('Get edge between nodes for val', () => {

        const output = g.getEdge(node3,node4)
        expect(output).toEqual(300)
    });
    it('Get edge returns false when nodes do not have an edge', () => {

        const output = g.getEdge(node1,node6)
        expect(output).toEqual(false)
    });

});
