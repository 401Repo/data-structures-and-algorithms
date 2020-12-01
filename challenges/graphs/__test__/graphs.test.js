'use strict';

const Graph = require('../graph-vanilla');


describe('Testing graphs', () => {

    it('Should create a graph and do a bts', () => {

        var g = new Graph(6);
        var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
       
        for (var i = 0; i < vertices.length; i++) {
            g.addVertex(vertices[i]);
        }
        
        g.addEdge('A', 'B');
        g.addEdge('B', 'C');
        g.addEdge('C', 'D');
        g.addEdge('D', 'E');
        g.addEdge('E', 'F');

        expect(g.bfs('A')).toEqual(["A", "B", "C", "D", "E", "F"]);
    });

});
