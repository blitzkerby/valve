---
title: Asynchronous JavaScript
allDay: true
startTime: 17:00
endTime: 17:30
date: 2024-07-23
completed: 
tags:
  - JavaScript
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