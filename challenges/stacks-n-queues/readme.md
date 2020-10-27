# Stacks and Queues

This is a three-fer: we need a node class, a queue class, and a stack class.

### Curent Tests

### Testing my stacks

-    ✓ I can create and test an empty stack (1 ms)
-    ✓ Can push data in to a stack, and check top node
-    ✓ Can successfully push many in to stack (1 ms)
-    ✓ Can successfully pop from stack (4 ms)
-    ✓ Can successfully empty the stack
-    ✓ Can reveal next value in stack (1 ms)

### Testing my queues

-    ✓ Can create empty queue (2 ms)
-    ✓ Can make a node travel to the front of a queue
-    ✓ Can successfuly add multiple nodes and point to back and front (1 ms)
-    ✓ Can can remove front node
-    ✓ Can empty the queue
-    ✓ Will be able to see if a queue is empty true / false

### Queue:

Create a Queue class that has a front property. It creates an empty Queue when instantiated.

This object should be aware of a default empty value assigned to front when the queue is created.

Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

Should raise exception when called on empty queue

Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

Should raise exception when called on empty queue

Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

### Stack:

Create a Stack class that has a top property. It creates an empty Stack when instantiated.

This object should be aware of a default empty value assigned to top when the stack is created.

Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.

Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.

Should raise exception when called on empty stack

Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

Should raise exception when called on empty stack

Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
