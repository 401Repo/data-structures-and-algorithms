### Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

I added a value (weight) to my edges, so that they are not just connecting, but their value can be added to get a total to the "trip" and each edge has a cost.

Ilustration below on a 2 stop fligth from CA to MX.

![Image](https://github.com/401Repo/data-structures-and-algorithms/blob/main/challenges/graphs/phonto-2.JPG)

# BFT:

I had to: create a graph, create a vertex, and create edges clases. Then i had to go ahead and make the edges between the vertexs.I created a directed graph from vertex A to F.

### Example:

My Graph is: (A) -> (B) -> (C) -> (D) -> (E) -> (F)

The way the function makes the transversal for the test is that i have to go to my fuction from a starting node:

bfs(starting node: 'A');

what this function does is that if takes A as the start of the node. Then using a queue and following the direction of the edges iterated thru the graph and returns a collection of the vertexes transversed.

### Test:

  Testing graphs
   
   -  ✓ Should create a graph and do a bts (2 ms)

