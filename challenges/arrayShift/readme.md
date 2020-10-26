# Array Shift

In this challenge we take an array and the just put a value in the middle. 

### Curent Tests

###### Testing my shift array function

-    ✓ It should take an array and an input and place the input in the middle (3 ms)

This works by placing the array input .length and dividing it in 2 and also using Math.flood to get rid of any decimals.

We also create a new array and pass it all of the values up until the mid point. At the mid we then add the value, the the next index value, and after all the next values by ading a i + 1;