# Insert Sort:

I used the help of [this site](https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c) to see what the code looks like in js instead of the example on our instructions.

Inser sort works like you would arrange playing cards in your hand but with js on an array.

### Line by line read example:

- fist we declare the function and the intake parameter (an array):
> let insertionSort = (inputArr) => {

- then we declare a varaiabel to stand in for teh length of the array to pass in:
    >let length = inputArr.length;

- lets begin our loop, where we are shifting the lesser value to the right of a bigger value.
    > for (let i = 1; i < length; i++) {
      
- our key is the index at which we will compare the follwoing value.
    > let key = inputArr[i];
      
- then we look at the first array element that is less than or equal to our key
        let j = i - 1;

- if teh condition is met we shift the element to the right of the key.   
    >while (j >= 0 && inputArr[j] > key) {

            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
      
        inputArr[j + 1] = key;
    }

- We return the sorted array after the keys have been 

    return inputArr;
};