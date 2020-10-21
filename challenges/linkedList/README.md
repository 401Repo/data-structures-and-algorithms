# Singly Linked List
<!-- Short summary or background information -->

I had to make this CC make it so you can add, see if there's a true or flase response if there was a a certain index in the Array list, and print everything out in a certain pattern.

## Challenge
<!-- Description of the challenge -->

#### Features
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
- Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called toString (or st in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"


## Code Challenge 06 Update

- Added and tested that i can just add a new node to the end of a list.
- made sure i can insert before a given value in an array list
- made sure i can add after

- kept the printing just like asked to { a } -> { b }... and used the string to test new methods.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Big O(1) is when we needle pint on one entry without calling all the list... which only makes sense when we know where to inser via knowing the head. That being say, you cant big O 1 when you need to search the array list thru to see if there's a value in it to check true (i would imagine)

## API
<!-- Description of each method publicly available to your Linked List -->
i think im going to export! havent just yet.