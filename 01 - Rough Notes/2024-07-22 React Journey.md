---
title: Thinking in React
allDay: false
startTime: 15:30
endTime: 16:00
date: 2024-07-31
completed: 
tags:
  - JavaScript
type: single
---
JavaScript has “`async`” and “`await`” methods, used for promises.



Assume the following example,

```JS
async function fetchData(link)
{
	try
	{
		let reponse = await fetch(link)
		let data    = await response.json();	
	
		console.log(data)
	}

	catch (error)
	{
		console.error("Error fetching data:", error)
	}
	
}


fetchData('https://jsonplaceholder.typicode.com/todos/1')
```


### Explanation:

1. **Async Function**: The `async` keyword before the function declaration makes it an asynchronous function, which means it will return a promise.
   
2. **Await Keyword**: The `await` keyword is used to pause the execution of the async function until the promise is resolved. In this example, `await fetch(...)` waits for the fetch request to complete, and `await response.json()` waits for the response to be parsed as JSON.
   
3. **Error Handling**: The `try...catch` block is used to handle any errors that might occur during the asynchronous operations.



This example fetches data from a placeholder API and logs it to the console. If there’s an error during the fetch, it will be caught and logged.

Feel free to try this out in your code! If you have any specific scenarios or further questions, let me know.

Assume some object:

```JS
const someObject = {
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
```


it is then possible to de-structure it as such:

```JS
const {title, author} = someObject
```

This allows for quick access to the data stored directly in the object.

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



![[Pasted image 20240724165244.png]]



## What is JSX?

- Declarative syntax to describe what components look like and how they work 

* Components must return a block of JSX 
  
* Extension of JavaScript that allows us to embed JavaScript, CSS, and React components into html
  
* Each JSX element is converted to a `React.createElement` function call

## Props

>
	Props are used to pass data from *parent components* to *child components* 
> 	
> 	(down the components tree)
> 	


> 
	Essential tool to configure and customize components 
> 
> 	(like function parameters)
> 	



> 
	With props, parent components control how child components look and work
> 


> 
	**Anything** can be passed as props: single values, arrays, objects, functions, even other components
> 


```jsx
function CourseRating()
{
	const [rating, setRating] = useState(0);

	return (
		<Rating 
			text="Course Rating"
			currentRating={Rating}
			numOptions={3}
			options={["Terrible", "Okay", "Amazing"]}
			allRatings={{num:2390, avg:4.8}}
			setRating={setRating}
			component={Star}
		/>			
	)
}

```

Props is data coming from the ***outside***, and can only be updated by the ***parent component***.

![Props are read-only, they are immutable! This is one of React’s strict rules]
![If you need to mutate props, you actually need state]


![[Pasted image 20240724233157.png]]

```jsx
import { useState } from "react";

const messages = [
  "Learn React ⚛",
  "Apply for jobs 🤩",
  "Invest your new income 🤑",
]


export default function App()
{
  const [step, setStep] = useState(1)

  function handlePrevious()
  {
    if(step > 1)
      setStep(step - 1);
  }

  function handleNext()
  {
    if(step < 3)
      setStep(step + 1);
  }


  return <>
    <div className="steps">
      
      <div className="numbers">
        <div className={`${   step >= 1 ? "active" : ""   }`}>1</div>
        <div className={`${   step >= 2 ? "active" : ""   }`}>2</div>
        <div className={`${   step >= 3 ? "active" : ""   }`}>3</div>
      </div>
      
      <p className="message">
        Step {step} : {messages[step-1]}
      </p>

      <div className="buttons">


        <button 
            style={{backgroundColor:"#7950f2", color:"#fff"}}
            onClick={() => handlePrevious()}
          >Previous</button>


        <button 
              style={{backgroundColor:"#7950f2", color:"#fff"}}
              onClick={() => handleNext()}
            >Next</button>
      </div>

    </div>

    
  </>
}
```




![[Pasted image 20240730102040.png]]


### Props
---
**Props** (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are immutable, meaning their values cannot be changed once set.

> `ParentComponent.js`
```jsx
import React from 'react';
import ChildComponent from './ChildComponent';
```
```jsx
function ParentComponent() {
    return (
        <ChildComponent name="John Doe" age={30} />
    );
}
```
```jsx
export default ParentComponent;
```

> `ChildComponent.js`
```jsx
import React from 'react';
```
```jsx
function ChildComponent(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}
```
```jsx
export default ChildComponent;
```

### State
---
**State** is used to manage data that can change over time within a component. Unlike props, state is mutable and can be updated using the `setState` method (or `useState` hook in functional components). State is local to the component and cannot be accessed or modified by other components.

```jsx
import React, { useState } from 'react';
```
```jsx
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default Counter;
```


![[Pasted image 20240731191611.png]]



# Child-to-Parent communications
---
![[Pasted image 20240801174230.png]]



# Deriving State
---
![State that is computed from an existing piece of state or from props.]

```jsx
const [cart, setCart] = useState([
	{name: "JavaScript Course", price: 15.99},
	{name: "Node.js Bootcamp", price: 14.99}
])
```


### Bad Practice
```jsx
const [numItems, setNumItems] = useState(2);
const [totalPrice, setTotalPrice] = useState(30.98);
```
- Three separate pieces of state, even though `numItems` and `totalPrice`


```jsx
const numItems = cart.length;
const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0)
```