# Code Challenge 28: Quick Sort
# Challenge Summary
* **Quick sort** is a Divide and Conquer algorithm, an in-place sorting algorithm.
* It picks an element as pivot and partitions the given array around the picked pivot.
* Quick sort is more efficient and works faster than merge sort in case of smaller array size or datasets.
* used for information searching 

![](https://stackabuse.s3.amazonaws.com/media/quicksort-in-javascript-1.jpg)

## Challenge Description
Create a function that sort by insertion.go over the output of this function step by step.

## Approach & Efficiency
* The approach:
  1.  Given an array, we pick an item, called pivot. 
  2.  Get all the items smaller than the pivot, and the items bigger than the pivot.
  3.  Run the same operation on the 2 array that compose the smaller and bigger items.
* Efficiency:
 - Big O of space: O(1) 
 - Big O of time: O(n log n) in the best case, O(n log n) in the average case, and O(n^2) in the worst case.

## Solution

![](assets/../../assets/insertionSort/insertionSort.png)

## Resources:
* [Quick Sort](https://www.geeksforgeeks.org/insertion-sort/)

## The Code:
* To test run: `npm test QuickSort.test`
* [The code](../QuickSort/QuickSort.js)