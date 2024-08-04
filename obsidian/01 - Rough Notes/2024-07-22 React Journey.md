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


***Bad Practice***
```jsx
const [numItems, setNumItems]     = useState(2);
const [totalPrice, setTotalPrice] = useState(30.98);
```
---
- Three separate pieces of state, even though `numItems` and `totalPrice`
- Need to keep them in sync (update together)
- 3 state updates will cause 3 re-renders


***Good Practice***
```jsx
const numItems   = cart.length;
const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0)
```
---
- Just regular variables, no `useState`
- Cart state is the *single source of truth for this related* data
- Works because re-rendering component will *automatically re-calculate* derived state
=======



![[Pasted image 20240802110937.png]]


# Tip Calculator
---

# `App.jsx`
---

![App()]
```jsx
import { useState } from "react"

export default function App()
{
    return (
        <div>
            <TipCalculator />
        </div>
    )
}
```

![TipCalculator()]
```jsx

function TipCalculator()
{
    const [bill, setBill] = useState(0)
    const [percentage1, SelectPercentage1] = useState(0)
    const [percentage2, SelectPercentage2] = useState(0)

    const tip = bill * (percentage1 + percentage2) / (2 * 100)

    return <div>
        <BillInput 
		        bill={bill}
		        setBill={setBill}/>
        <SelectPercentage 
			    percentage={percentage1} 
			    SelectPercentage={SelectPercentage1}>
			How did you like the service? 
	    </SelectPercentage>
        <SelectPercentage 
			    percentage={percentage2}
			    SelectPercentage={SelectPercentage2}>
			How did your friend like the service?
		</SelectPercentage>
        <Output bill={bill} tip={tip} />
        <Reset />
    </div>
}
```

```jsx
function BillInput({ bill , setBill })
{ 
    return <div>
        <label>How much was the bill?</label>
        <input type="number" onChange={(e) => setBill(Number(e.target.value))}/>
    </div>
}
```


```jsx
function SelectPercentage({ percentage , SelectPercentage , children })
{


    return <div>
        <label>{children}</label>
        <select value={percentage} onChange={e => SelectPercentage(Number(e.target.value))}>
            <option value={0}  >    Very dissatisfied (0%)  </option>
            <option value={5}  >    dissatisfied (5%)       </option>
            <option value={10} >    Neutral (10%)           </option>
            <option value={15} >    satisfied (15%)         </option>
            <option value={20} >    Very satisfied (20%)    </option>
        </select>
    </div>
}
```

```jsx
function Output({ bill , tip })
{
    return <h3>You pay ${bill + tip} (${bill} + ${tip})</h3>
}
```

```jsx
function Reset()
{
    return <button>Reset</button>
}
```



# Using An API
---

In order to utilize APIs, you first have to ensure that `Axios` is installed:

```BaSH
npm run dev
```

Then your APIs could be written like the following, which uses the `Unsplash API`. 

```jsx
import axios from 'axios';

const api_link = "https://api.unsplash.com/search/photos"
const access_key = "8050V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y"

const searchImages = async () => {
	const response = await axios.get(api_link, {
		headers:{
			Authorization: `Client-ID ${access_key}`
		},
		params:{
			query: "cars"
		}
	})

	return reponse	
}

export default searchImages
```



# JSON Server Issues and Required version
---

![[Pasted image 20240803072036.png]]


```BaSH
npm install json-server@0
```





# Creating a `context`
---
```jsx
const NumberContext = React.createContext();

function App() {
  return (
    <NumberContext.Provider value={42}>
      <Display />
    </NumberContext.Provider>
  );
}
```


## **Using `useContext`**:
---
```jsx
function Display() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}

```


## **Using `Consumer` (the traditional way)**:
---
```jsx
function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}
```



![[Pasted image 20240804181833.png]]


`useState` is a hook that allows you to add state to your functional components. It returns an array with two elements: the current state value and a function to update it.

```jsx
import React, { useState } from 'react';

function Counter() 
{
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

```jsx
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}

```

```jsx
import React, { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() 
{
  const theme = useContext(ThemeContext);

  return <button style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>Theme: {theme}</button>;
}

function App() 
{
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

export default App;

```