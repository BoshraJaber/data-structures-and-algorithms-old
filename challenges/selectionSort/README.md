# Code Challenge 26: Insertion Sort
# Challenge Summary
* **Insertion sort** is a sorting algorithm that builds a final sorted array (sometimes called a list) one element at a time. 
* Used in complex computer programs such as file search, data compression, and path finding.
* It is efficient on small lists.

## Challenge Description
Create a function that sort by insertion.go over the output of this function step by step.

## Approach & Efficiency
* The approach was to loop over the array and compare the element with the element that stands before it and put the smaller one of them fist, and keep doing that until the first element is reach, keep doing that for each element in the array.
* Efficiency:
 - Big O of space: O(1) 
 - Big O of time: O(n*n) for having two nested loop (a while loop inside of a for loop)

## Solution

![](assets/../../assets/insertionSort/insertionSort.png)

## Resources:
* [Insertion Sort](https://www.geeksforgeeks.org/insertion-sort/)

## The Code:
* To test run: ` npm test insertSort.test`
* [The code](../selectionSort/selectionSort.js)