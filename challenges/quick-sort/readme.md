# Quick Sort

Quick sort works by using the beging or end element of a passed array:

[3, 4, 7, 1, 9, 2, 8] let 3 be our pivot!

then it get everything bigger or smaller to move to a sub array on either side of the pivot

[1,2] pivot: 3 [4,7,9,8]

Sub array one luckyly is sorted already, but the other sub array would pick a pivot and start again:

pivot 4

and everything stays so we end up with 7 ans the next pivot and:

[8] the pivot 7 [9];

and now we bring everything back as:

[1,2] pivot 3, pivot 4, pivot 7, [8] [9]

