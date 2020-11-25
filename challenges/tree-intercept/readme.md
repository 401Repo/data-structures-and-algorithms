# Tree intersect

Find the values between two binary search trees or throw an error if none exist.

### Curent Tests

  #### Testing the tree

  Testing our tree intersect

-    ✓ Making sure we can get key value pairs (3 ms)

-    ✓ We can get an array of the intersect of both tree values

-    ✓ Error if no root value is found for the intersect application

## Walk thru

Lets say i have binary search three one and two:

BST-one: (root 30)- (node 10)- (node 20)

BST-two: (root 40)- (node 10)- (node 20)

Now we take our first tree and make sure we pass the values to compare on to an object or throw an error.

Then we take the second BLS and make the  comparison if anything equals from root, to right, to left or we return an error.

The return is the values shared between both BST alone.

