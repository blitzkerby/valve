---
title: Prepare a lesson for team
allDay: false
date: 2024-06-04
endDate: 2024-06-04
completed: "False"
startTime: 04:30
endTime: 06:00
type: single
tags:
  - JavaScript
---
---
### <u>Topic</u>
`.some(arg)`  
`.every(arg)`    
`.find(arg) `  
`.findIndex(arg)`



> The `some()` method is a Boolean operator that checks for of an [array](<[array](https://www.programiz.com/javascript/array)>) that satisfies some conditional function. 

```JS
let numbers = [1, 3, 2, 5, 4];

// conditional function
function isEven(element) {
  return element % 2 === 0;
}

console.log(numbers.some(isEven));

// Output: true 
// Explanation : 2 and 4 satisfies the condition, returning true for the
//               entire array.
```
[reference](https://www.programiz.com/javascript/library/array/some)
[exercise](https://www.w3schools.com/jsref/jsref_some.asp)



>The `every()` method is a Boolean operator that checks if *all elements* of an array are true for some conditional function.

```JS
const ageArray = [34, 23, 20, 26, 12];

//conditional function 
function checkAdult(age) {
    return age >= 18;
}

let check = ageArray.every(checkAdult);

// Output: false
// Explanation : 12 does not satisfy the condition, returning false for the
//               entire array.
```
[reference](https://www.programiz.com/javascript/library/array/every)
[exercise](https://www.w3schools.com/jsref/jsref_every.asp)


>The `find()` method returns the **value** of the *first element* of an array that satisfies some conditional function.

```JS
let numbers = [1, 3, 4, 9, 8];

// conditional function
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber);

// Output: 4
// Explanation : 4 is the first element that satisfies the parity condition.
```
[reference](https://www.programiz.com/javascript/library/array/find)
[exercise](https://www.w3schools.com/jsref/jsref_find.asp)


> The `findIndex()` method returns the **index** of the first element of an array that satisfies some conditional function.

```JS
const array1 = [5, 12, 8, 130, 44];

// conditional function
const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Output: 3

```
[reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
[exercise](https://www.w3schools.com/jsref/jsref_findindex.asp)

