---
title: State vs Props
allDay: false
startTime: 10:00
endTime: 10:30
date: 2024-07-30
completed: 
tags:
  - JavaScript
---

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
