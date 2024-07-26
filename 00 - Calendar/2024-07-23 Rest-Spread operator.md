---
title: Spread operator
allDay: true
date: 2024-07-23
completed: 
tags:
  - JavaScript
---
### Rest Operator

The rest operator allows you to represent an indefinite number of arguments as an array. It’s often used in function parameters. 



Assume the following function,
$$
Sum(1,2,3,4) = 10
$$

In JavaScript, this function can be written as follows:
```JS
function Sum(...numbers){
	return nubmers.reduce((acc, curr) => acc + curr, 0)
}
```




### Spread Operator

The spread operator allows you to expand an iterable (like an array) into individual elements. It’s useful for copying arrays, combining arrays, or passing array elements as arguments to a function.



Assume the following procedure,
$$
C = A \cup B
$$

In JavaScript, it is written as,

```JS
const A = [1,2,3]
const B = [4,5,6]

const C = [...A, ...B] // [1,2,3,4,5,6]
```

