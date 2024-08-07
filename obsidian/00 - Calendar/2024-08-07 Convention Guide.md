---
title: Convention Guide
allDay: false
startTime: 15:00
endTime: 15:30
date: 2024-08-07
completed: null
---
# Convention Guide


  

### Where2 (web application)

————————————————

  
TEAM : LUCK
  

MEMBERS

| 1   | Raksmeysomaly  |
| --- | -------------- |
| 2   | Hong Sovannary |
| 3   | Krisna         |
| 4   | Sovattana      |
| 5   | Samedy         |
| 6   | Kerby          |
| 7   | Sombath        |

1. # Folder Structure![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXejyxMX70V8_f-K9wVbICIhSBBYHCJSh-IIlQx1_jxRCscsxmcz_sqS57kXysJ7p4Xg_jzJRqbiAe-zRznoBmgwpbPqbB7ACBoOarbxyZDUZylCN9Cnu3awcC1ZP8rbBDW6a9alNvzZt-GAgOIU52b1cb1Y?key=XOPvKnuCrwuetJVQWqfsig)
    

### File Naming

- Each javascript file will be in Pascal format except “index.js” and the name reflects each component. Whereas the file under the “hook” folder will be in camelCase.
    

  

 Example: 

- Model.js
    
- ModelPage.js
    
- useSum.js
    

  

- All HTML and CSS files must be in lowercase.
    
- All folder’s names must be in lowercase. 
    

2. # Front-End
    

### Variable Naming

- All variables will be in camelCase. 
    
- All the declarations should be ended with ‘ ; ’.
    
- Array of values or strings should be one line declaration. Whereas, Array of object and object should be in multiple-line declarations. 
    

  

Example: 

  

const fruits = [‘apple’, ‘orange’];

  

const objectList = [

{name: ‘apple’, cost: 5, amount: 2},

{name: ‘banana’, cost: 1, amount: 5}

];

  

const object = { 

Label,

Path,

Link,

};

### Function Naming

- Use variable declaration function or arrow function.
    

- All the declarations function will be in camelCase which shall start with handle+Action(){...} for EventListener. While other functions should be named with its purpose.
    

  

Ex: const handleClick = (parameter) => {

...code

} ;  // for EventListener

  

    const getInput = (param) => {

…code 

}; // for normal function

### One Component one file

  

- Define function and export separately
    

Ex: function Table (){...}

      export default Table;

- The component function will be in PascalCase. However, the props or parameters should be in lowercase by using multiple-line declarations when it’s more than three props.
    

  

Ex: function Model({

children,

route,

colour,

name

}){

…code

} ;

  
  

   - If there are more than three props in a component, 

     use multi-line declarations. 

  
  

Ex: <Form 

input = {...}

placeholder = {...}

submit = {...}

onclick = {...}

>

……code

</Form> 

  

- If the component has no Probs or children, it should use its own-closing tag with one spacing..
    

Ex: <ModelPage />       

  

- No inline Function. 
    

Ex: <div onClick = {()=>{a+ b}} > </div>

- Always return JSX with parentheses. 
    

  

### Quote 

- Using double quotes except import file’s path and list of strings and objects.
    

Ex: import App from ‘./App’; const list = [‘apple’ , ‘red’]

### Comment

- ### Always provide the comment to state the function’s purpose.
    
- Give the comment to the full name of the variable if there’s a shortcut.
    

Ex: let cnt = 0; // cnt = count

  
  

3. Back-End
    

Code Structure and Organization:

- Define a clear directory structure that separates different concerns (e.g., routes, controllers, models, services, middleware).
    
- Ensure consistency in file
    
-  naming conventions and module exports/imports.
    

Example: 

/src 

/controllers

ScholarshipController.js 

UniversityController.js 

  

/models 

  
  
  

API Design and Documentation:

- Follow RESTful principles or GraphQL schema design as appropriate.
    
- Define consistent and descriptive endpoint naming conventions.
    
- Use tools like Swagger or Postman for API documentation to ensure it’s always up to date and accessible to all team members.
    

Database Schema and Management:

- Standardise naming conventions for tables, columns, and relationships.
    
- Implement a migration strategy using tools like Sequelize (for SQL) to handle schema changes.
    

Error Handling and Logging:

- Implement a global error-handling mechanism that provides meaningful error messages and status codes.
    
- Use a structured logging system (e.g., Winston, Bunyan) to log errors, warnings, and info messages.
    
- Define logging levels and formats to facilitate debugging and monitoring
    

  

4. API/ AWS
    

- Using : 
    

  

import axios from 'axios';

  

const axiosClient = axios.create({

  baseURL: `https://api.example.com`,

  headers: {

    'Accept': 'application/json',

    'Content-Type': 'application/json'

  }

});

  

- Naming: 
    

- “req” is for request and “res” for response :
    

  

//Pluralized nouns for resources

router.get("/posts", (req, res) => {});

  

router.get("/posts/:id", (req, res) => {});

  

//Use forward slash (/) to indicate hierarchical relationships

router.get("/posts/:id/user", (req, res) => {});

  

router.get("/posts/:id/user", (req, res) => {});

  

//Easier to read

router.get("/store-inventory", (req, res) => {});

  
  

- API handler
    

- Export to use
    

export default {

  axiosClient

);

  

- Make Reusable API
    

  

import { axiosClient } from "../apiClient";

  

export function getProduct(){

    return axiosClient.get('/product');

}

  

export function addProduct(data){

    return axiosClient.post('/product', JSON.stringify(data));

}

- Using API
    

import { getProduct } from "../network/lib/product";

  

getProduct()

  .then(function(response){

    // Process response and

    // Do something with the UI;

  });

  
  

- http method :
    

  

router.get("/users", (req, res) => {});

  

//This meant to return, so it's a GET

  

router.get("/users/:id", async (req, res) => {

   const { id } = req.params;

  const drafts = await prisma.user.findUnique({

     where: {

       id: Number(id),

    },

  });

  res.json(drafts);

});

router.post("/users", (req, res) => {});

//The HTTP method is the deciding factor

router.delete("/users", (req, res) => {});

  

router.put("/users", (req, res) => {});

  

- Check Status-Code
    

  

axiosClient.interceptors.response.use(

  function (response) {

    return response;

  }, 

  function (error) {

    let res = error.response;

    if (res.status == 401) {

      window.location.href = “https://example.com/login”;

    }

    console.error(“Looks like there was a problem. Status Code: “ + res.status);

    return Promise.reject(error);  });

  
  
  

router.get("/posts/:id", async (req, res) => {

  const { id } = req.params;

  

  try {

    if (!id) throw Error();

    console.log("Here: ", id);

    const post = await prisma.post.findFirstOrThrow({

      where: { id: parseInt(id) },

    });

  

    res.status(200).json({ post });

  } catch (err) {

    //404 for Not Found

    res.status(404).json({ message: "No posts found with provided id" });

  }

});

  

5. Style Guide
    

Class and ID name should be descriptive and connect with hyphens (-) if they contain multiple words, name should always be in lowercase.

  

Font Size: 

Mobile

- Normal text : 16px
    
- Sub-text: 14px
    
- Header : 19px
    

Tablet

- Normal text :  20px
    
- Header : 30px
    

Desktop 

- Normal text : 20px
    

- Header : 30px
    

  

Font-Colour:

Black  and White

Margin: 

Mobile

16px

Tablet

32px

Medium laptop (1240-1439px)

200px

1440+ 

Scaling

  

Colour-palette :

Blue And Gray

  

Font-Family: 

Poppins

  
  
  
  

Git Flow Convention : [Link](https://docs.google.com/spreadsheets/d/1vyJJ5cIChH2KyNmeGg6SQQCYFPqE8xbpQu5S8hb2e20/edit?usp=sharing)

  
  

Role

  

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|No|Name|Convention Guide|Name|Design & Code|   |
|1|Ek Raksemysomaly|Front-end, Folder Structure<br><br>Git Flow Strategy|Ek Raksemysomaly|Livelihood Aids Page<br><br>- part time job<br><br>- Student Loan<br><br>- Accommodation<br><br>Homepage<br><br>- Mission & Vision|   |
|2|Hong Sovannary|Back-end|Prak Sambath|
|3|Hun vadnha Samedy|Hong Sovannary|
|4|Chea Hakkerby|Style Guide|Chea Hakkerby|- University Page<br><br>- Scholarship Page|   |
|5|Sochit Sovattana|Sochit Sovattana|
|6|Yun Chankrisna|Yun Chankrisna|- Sign in/ Sign up Page<br><br>- Admin panel for Developer<br><br>- Admin panel for Client|   |
|7|Prak Sambath|API/ AWS|Hun vadnha Samedy|

  
**